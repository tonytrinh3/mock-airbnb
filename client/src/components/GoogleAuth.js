import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';



class GoogleAuth extends React.Component{

    // state = {isSignedIn: null};

    //maybe this happens every time the page refreshes...
    componentDidMount(){
        //gapi under window scope/browser 
        //different scope - what this website wants to use

        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId:'160243611853-ctm8nfdd46qt3rka0pmrqmocf9fel4c6.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                //apparently, if you attach a variable with this. and that variable happens to be a function, then it can be access within all functions that is below it...which is called hoisting so that works.
                this.auth = window.gapi.auth2.getAuthInstance();

                //window.gapi.auth2.getAuthInstance().isSignedIn.get() returns true or false from google
                //window.gapi.auth2.getAuthInstance().isSignedIn.get() is from google
                //this.onAuthChange is our function
                this.onAuthChange(this.auth.isSignedIn.get());
                // this.setState({isSignedIn: this.auth.isSignedIn.get()});

                //you are using the built in listen prototype of gapi.isSignedIn, see if any change occur
                //this.onAuthChange is a callback function
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    //you are doing this in order for the text to change every time you sign in and out
    //you are putting in a boolean for this function
    onAuthChange = (isSignedIn)=>{
        // this.setState({isSignedIn: this.auth.isSignedIn.get() });

        if (isSignedIn){
            //what is passed in here is the id you get from google api
            // this.props.signIn(this.auth.currentUser.get().getId());
            const profile = this.auth.currentUser.get().getBasicProfile();

            //https://developers.google.com/identity/sign-in/web/people
            const userProfile = {
                userId: profile.getId(),
                userFirstName: profile.getGivenName(),
                userLastName: profile.getFamilyName(),
                userImage: profile.getImageUrl()
            };



            this.props.signIn(userProfile);
        } else {
            this.props.signOut();
        }
      
    }


    onSignInClick = () =>{
        this.auth.signIn();

    };

    onSignOutClick = () =>{
        this.auth.signOut();
    };

    //this is just rendering logic
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return <button onClick = {this.onSignOutClick} className="google-auth-button">Sign Out</button>;
        } else {
            return <button onClick = {this.onSignInClick} className="google-auth-button">Sign In with Google</button>;
        }
    }

    render(){
        return(
        <div className="google-auth">{this.renderAuthButton()}</div>
        )
    }
}

//this state is the state that you have in authReducer.js
//you call mapstatetoprops when you want to access the state through the redux store 
const mapStateToProps = (state) =>{
    // console.log(state);
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);
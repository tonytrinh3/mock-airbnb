import React from 'react';
// import airbnb_logo from "../img/airbnb-logo.png";
import GoogleAuth from "./GoogleAuth";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Navigation extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    onClick(){
        
    }

    render(){

        // const {
        //     isSignedIn
        // } = this.props;
 
        // {this.props.userProfile ? this.props.userProfile.userFirstName:"aef" }
    
        return (

            
            <nav className="nav">
                <Link  to={`/`} ><img className = "nav__img" src={require("../img/airbnb-logo.png")} alt="airbnb_logo"/></Link>
               
            
                <div className="nav__text">
                <GoogleAuth />
                    <div className = "nav__text__item">English (US)</div>
                    <div className = "nav__text__item">USD</div>
                    <div className = "nav__text__item">Host a home</div>
                    <div className = "nav__text__item">Host an experience</div>
                    <div className = "nav__text__item">Help</div>
                   
                    <button onClick = {this.onClick} className = "nav__text__item">Login</button>
    
                </div>
                
            </nav>
        )
    }
   
    // const {
    //     isSignedIn
    // } = this.props;

   
};

const mapStateToProps = (state)=>{
    // console.log(state);
    return {
        isSignedIn: state.auth.isSignedIn,
        userProfile: state.auth.userProfile
    }
}

export default connect (mapStateToProps,null)(Navigation);
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchBookings} from '../../actions/index';
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoogleMap from './GoogleMap';

class RoomListingPage extends React.Component{

    //then you call the action to use in here
    componentDidMount(){
        this.props.fetchBookings();
    }

    

    renderList(){
        return this.props.bookings.map(booking=>{
            return (
                <div className="listings__listing" key = {booking.id}>
                    <Link to={`/booking/${booking.id}`}> {booking.title}</Link>
                    <img src="" alt="" className="listings__listing__img"/>
                  
               
                </div>
            )
        })
    }


    render(){
        console.log(this.props.bookings)
        return(
            <div className="wef">
                <Navigation />

                <div className="listing-page">
            

                    <h1 className="listing-page__header header-big margin-bottom-large">
                    RoomListingPage
                    </h1>
                
                    <div className="listings">
                        {this.renderList()}
                    </div>

                    <GoogleMap/>

                </div>
                <Footer/>
            </div>

        )
    }
};


const mapStateToProps = (state) =>{
     //Object.values is a javascript function - that takes the values of each object awef: 2, and just lay them out in an array
    console.log(state);
     return{
        bookings: Object.values(state.bookings)
        //this is handy to see if currentUserId exist or not to render certain things if the user has logged in or not or if the user own the content of the object or not  
        // currentUserId: state.authy.userId,
        // isSignedIn: state.authy.isSignedInssss
    }
}

//you call the action that you are using to fetch from store
//connect is part of the redux store
export default connect(mapStateToProps,{fetchBookings})(RoomListingPage);
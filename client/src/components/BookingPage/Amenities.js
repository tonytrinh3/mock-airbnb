import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchBookings} from '../../actions/index';

class Amenities extends React.Component{
    ///supposed to be streamlist
    
    componentDidMount(){
        this.props.fetchBookings();
    }

    // something(){
    //     this.props.fetchBookings();
    // }

    renderAdmin(booking){
    
        if (booking.userId === this.props.currentUserId){
            return (
            <div className="aewf">
               
                <Link to = {`/booking/edit/${booking.id}`}style ={{color: "red"}}> EDIT!!!</Link>
                DELETE!!!
                </div>
            )
        }
    }


    renderList(){
        return this.props.bookings.map(booking=>{
            return (
                <div className="booking" key = {booking.id}>
                    {booking.title}
                    {booking.description}
                    {this.renderAdmin(booking)}
                </div>
            )
        })
    }

    renderCreate(){
        console.log(this.props.isSignedIn);
        if(this.props.isSignedIn){
            return(
                <div className="aewf" style ={{backgroundColor: "red",  }}>
                    <Link to = "/">
                    Create Booking
                    </Link>
                </div>
            )
        }
    }

    render(){
        console.log(this.props.bookings);
        return(
            <div className="amenities">Amenities
            {this.renderList()}
            {this.renderCreate()}
            </div>
            
        )
    }

}

const mapStateToProps = (state) =>{
    //Object.values is a javascript function - that takes the values of each object awef: 2, and just lay them out in an array
    return {
        bookings: Object.values(state.bookings),
        //this is handy to see if currentUserId exist or not to render certain things if the user has logged in or not or if the user own the content of the object or not  
        currentUserId: state.authy.userId,
        isSignedIn: state.authy.isSignedInssss
    }
}

//connect is part of the redux store
export default connect(mapStateToProps,{fetchBookings})(Amenities);
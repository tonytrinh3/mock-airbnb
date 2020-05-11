import React from 'react';
import { renderChildren } from 'redux-form/lib/ReduxFormContext';
import {connect} from 'react-redux';
import {fetchUserReservations, fetchBookings} from '../../actions';
import Navigation from '../Navigation';
import moment from 'moment';

class TripsPage extends React.Component{

    componentDidMount(){
        this.props.fetchUserReservations();
        this.props.fetchBookings();
    }

    // renderDate(){

    // }

    renderReservation(){
        return this.props.trips.map((trip,i) =>{
            if (trip.userId === this.props.userId){
               
                return (
                    <div className="trips-page__card" key = {i}>
                        <h2 className="header-medium">{trip.reservation.title}</h2>
                        <h2 className="header-medium">{trip.reservation.description}</h2>
                        <h2 className="header-medium">{trip.reservation.location}</h2>
                        <img src={require(`../../img/booking-page/listing-1/${trip.reservation.imgs.img_1}.jpg`)} alt= {`img_${i}`} key ={`img_${i}`}/>
                        {/* <p>{moment(trip.reservation.startDate).format("MMMM Do")} - {moment(trip.reservation.endDate).format("Do")} </p> */}
                        <p>{`${trip.reservation.startDate.split(" ")[0]} ${trip.reservation.startDate.split(" ")[1]} - ${trip.reservation.endDate.split(" ")[1]}` }</p>                    
                    </div>
                   
                )
            }
        })
    }


    render(){
        //console.log(this.props.trips);
        return(
            <div className="trips-page">
            <Navigation />
                Trips Page
                {this.renderReservation()}
            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        trips: Object.values(state.userReservations),
        userId: state.auth.userId,
        bookings: state.bookings
    }
}

export default connect(mapStateToProps,{fetchUserReservations,fetchBookings})(TripsPage);
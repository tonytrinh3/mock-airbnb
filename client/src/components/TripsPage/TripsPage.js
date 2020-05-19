import React from 'react';
import { renderChildren } from 'redux-form/lib/ReduxFormContext';
import {connect} from 'react-redux';
import {fetchUserReservations, fetchBookings} from '../../actions';
import Navigation from '../Navigation';
//import moment from 'moment';
import TripCard from './TripCard';

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
                    <div className="trip-card" key = {i}>
                        <img className = "trip-card__img" src={require(`../../img/booking-page/listing-1/${trip.reservation.imgs.img_1}.jpg`)} alt= {`img_${i}`} key ={`img_${i}`}/>    
                        <div className="trip-card__description ">
                            <p className = "trip-card__date ">{`${trip.reservation.startDate.split(" ")[0]} ${trip.reservation.startDate.split(" ")[1]} - ${trip.reservation.endDate.split(" ")[1]}` }</p>                    
                            {/* <h2 className="header-medium">{trip.reservation.description}</h2> */}
                            <h3 className="trip-card__location ">{trip.reservation.location.split(",")[0]}</h3>
                            <p className="trip-card__title ">{trip.reservation.title}</p>
                        </div>
                        <a href="" className="trip-card__more-info">Show more trip plans</a>
                        {/* <p>{moment(trip.reservation.startDate).format("MMMM Do")} - {moment(trip.reservation.endDate).format("Do")} </p> */}
                       
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
                <h1 className="trips-page__header header-big margin-bottom-large">Trips</h1>
                <div className="trips-page__cards">
                    {this.renderReservation()} 

                </div>
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
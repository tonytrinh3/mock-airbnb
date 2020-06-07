import React from 'react';
// import { renderChildren } from 'redux-form/lib/ReduxFormContext';
import {connect} from 'react-redux';
import {fetchUserReservations} from '../../actions';
import Navigation from '../Navigation';
//import moment from 'moment';
import TripCard from './TripCard';

class TripsPage extends React.Component{

    componentDidMount(){
        this.props.fetchUserReservations();
        // this.props.fetchBookings();
    }

    // renderDate(){

    // }

    renderReservation(){

        const {
            trips,
            userProfile
        } = this.props;

    
        return trips.map((trip,i) =>{

            const {
                bookingId,
                imgs,
                endDate,
                location,
                startDate,
                title
            } = trip.reservation;


            //you do this to wait until userProfile is fetch and loading
            if (!userProfile){
                return <h1 className=""></h1>
            }
            
            if (trip.userId === userProfile.userId){
                return (
                    <div className="trip-card" key = {i}>
                        <img className = "trip-card__img" src={require(`../../img/booking-page/listing-${bookingId}/${imgs.img_1}.jpg`)} alt= {`img_${i}`} key ={`img_${i}`}/>    
                        <div className="trip-card__description ">
                            <p className = "trip-card__date ">{`${startDate.split(" ")[0]} ${startDate.split(" ")[1]} - ${endDate.split(" ")[1]}` }</p>                    
                            {/* <h2 className="header-medium">{trip.reservation.description}</h2> */}
                            <h3 className="trip-card__location ">{location.split(",")[0]}</h3>
                            <p className="trip-card__title ">{title}</p>
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
    // console.log(state);
    return {
        trips: Object.values(state.userReservations),
        userProfile: state.auth.userProfile

    }
}

export default connect(mapStateToProps,{fetchUserReservations})(TripsPage);
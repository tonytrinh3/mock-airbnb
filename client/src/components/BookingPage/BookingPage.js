import React from 'react';
import Navigation from '../Navigation';
import PictureHeader from './1PictureHeader';
import BookingCard from './2BookingCard';
import ListingDescription from './ListingDescription';
import Amenities from './Amenities';
import SleepingArrangement from './SleepingArrangement';
import Accessibility from './Accessibility';
import AvailabilitySection from './AvailabilitySection';
import ReviewSection from './ReviewSection';
import AboutHost from './AboutHost';
import Neighborhood from './Neighborhood';
import Cancellations from './Cancellations';
import ExploreOptions from './ExploreOptions';
import Footer from '../Footer';

import {connect} from 'react-redux';
import {fetchBooking} from '../../actions/index';

// import { Button, Alert } from 'reactstrap';

class BookingPage extends React.Component{

    componentDidMount(){
        this.props.fetchBooking(this.props.match.params.id);
    }

    // renderStuff(){
    //     return(
    //         <div className="aewf" style={{color: "red"}}>{this.props.booking.title}</div>
    //     )
    // }

    render(){
        if (!this.props.booking){
            return (<div className="awef">Loading!</div>);
        }
        console.log(this.props.booking);
 
        return(
            <div className="booking-page">
                <Navigation/>
                <PictureHeader/>
                <ListingDescription/>
                <hr className="booking-page__hr hr"/>
                <BookingCard bookingId = {this.props.booking.id}/>
                <Amenities/>
                <hr className="booking-page__hr hr"/>
                <SleepingArrangement/>
                <hr className="booking-page__hr hr"/>
                <Accessibility/>
                <hr className="booking-page__hr hr"/>
                <AvailabilitySection/>
                <hr className="booking-page__hr hr"/>
                <ReviewSection/>
                <hr className="booking-page__hr hr"/>
                <AboutHost/>
                <hr className="booking-page__hr hr"/>
                <Neighborhood/>
                <hr className="booking-page__hr hr"/>
                <Cancellations/>
                <hr className="booking-page__hr hr"/>
                <ExploreOptions/>
                <hr className="footer__hr hr"/>
                <Footer/>
                
            </div>
        )
    }

};


//so you can pull it one time and just pass it down as props...

const mapStateToProps = (state,ownProps) =>{
    // console.log(ownProps);
    // console.log(state);
    return{
        booking: state.bookings[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchBooking})(BookingPage);
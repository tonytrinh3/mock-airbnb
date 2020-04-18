import React from 'react';
import Navigation from '../Navigation';
import PictureHeader from './1PictureHeader';
import BookingCard from './BookingCard';
import Amenities from './Amenities';
import SleepingArrangement from './SleepingArrangement';
import AvailabilitySection from './AvailabilitySection';
import ReviewSection from './ReviewSection';
import AboutHost from './AboutHost';
import Neighborhood from './Neighborhood';
import Cancellations from './Cancellations';
import ExploreOptions from './ExploreOptions';
import Footer from '../Footer';

import {connect} from 'react-redux';
import {fetchBooking} from '../../actions/index';




class BookingPage extends React.Component{

    componentDidMount(){
        this.props.fetchBooking(this.props.match.params.id);
    }


    renderStuff(){
        return(
            <div className="aewf" style={{color: "red"}}>{this.props.booking.title}</div>
        )

    }

    render(){
        if (!this.props.booking){
            return (<div className="awef">Loading!</div>);
        }
        console.log(this.props.booking);
        return(
            <div className="booking-page">
                <Navigation/>
                <PictureHeader/>
                {this.renderStuff()}
                <BookingCard bookingId = {this.props.booking.id}/>
                <Amenities/>
                <SleepingArrangement/>
                <AvailabilitySection/>
                <ReviewSection/>
                <AboutHost/>
                <Neighborhood/>
                <Cancellations/>
                <ExploreOptions/>
                <Footer/>
            </div>
        )
    }

};


//so you can pull it one time and just pass it down as props...

const mapStateToProps = (state,ownProps) =>{
    console.log(ownProps);
    console.log(state);
    return{
        booking: state.bookings[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchBooking})(BookingPage);
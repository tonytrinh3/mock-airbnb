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





class BookingPage extends React.Component{
    render(){
        return(
            <div className="booking-page">
                <Navigation/>
                <PictureHeader/>
                <BookingCard/>
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

const mapStateToProps = (state,ownProps) =>{
    console.log(ownProps);
    return{
        state
    }
}

export default connect(mapStateToProps)(BookingPage);
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
        //console.log(this.props.match.params.id);
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
        //console.log(this.props.booking);
 
        return(
            <div className="booking-page">
                <Navigation/>
                <PictureHeader
                imgs = {this.props.booking.imgs}
                id = {this.props.match.params.id}
                />
                <ListingDescription
                title = {this.props.booking.title}
                location = {this.props.booking.location}
                description = {this.props.booking.description}
                home_type = {this.props.booking.home_type}
                space_type = {this.props.booking.space_type}
                home_specs = {this.props.booking.home_specs}
                host_info = {this.props.booking.host_info}
                self_check_in = {this.props.booking.self_check_in}
                reviews = {this.props.booking.reviews}
                />
                <hr className="booking-page__hr hr"/>
                <BookingCard 
                bookingId = {this.props.booking.id}
                title = {this.props.booking.title}
                location = {this.props.booking.location}
                description = {this.props.booking.description}
                imgs = {this.props.booking.imgs}

                />
                
                <hr className="booking-page__hr hr"/>
                <hr className="booking-page__hr hr"/>
                <Amenities 
                amenities = {this.props.booking.amenities}
                />
                <hr className="booking-page__hr hr"/>
                <SleepingArrangement
                sleeping_arrangement = {this.props.sleeping_arrangement}
                />
                <hr className="booking-page__hr hr"/>
                <Accessibility/>
                <hr className="booking-page__hr hr"/>
                <hr className="booking-page__hr hr"/>
                <AvailabilitySection
                availability = {this.props.booking.availability}
                />
                <hr className="booking-page__hr hr"/>

                <ReviewSection
                reviews = {this.props.booking.reviews}
                />
                <hr className="booking-page__hr hr"/>
                <AboutHost
                host_info = {this.props.booking.host_info}
                reviews = {this.props.booking.reviews}
                />
                <hr className="booking-page__hr hr"/>
                <Neighborhood/>
                <hr className="booking-page__hr hr"/>
                <Cancellations 
                cancellations = {this.props.booking.cancellations}
                house_rules = {this.props.booking.house_rules}
                check_in = {this.props.booking.check_in}
                check_out = {this.props.booking.check_out}
                self_check_in = {this.props.booking.self_check_in}
                />
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
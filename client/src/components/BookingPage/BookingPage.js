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
            return (<div className="header-big">Loading!</div>);
        }
        
        //console.log(this.props.booking);

        const {
            amenities,
            availability,
            cancellations,
            check_in,
            check_out,
            description,
            home_specs,
            home_type,
            host_info,
            house_rules,
            id,
            imgs,
            location,
            reviews,
            price,
            self_check_in,
            sleeping_arrangements,
            space_type,
            title
        } = this.props.booking

 
        return(
            <div className="booking-page">
                <Navigation/>
                <PictureHeader
                imgs = {imgs}
                id = {this.props.match.params.id}
                />
                
                <ListingDescription
                title = {title}
                location = {location}
                description = {description}
                home_type = {home_type}
                space_type = {space_type}
                home_specs = {home_specs}
                host_info = {host_info}
                self_check_in = {self_check_in}
                reviews = {reviews}
                />
                
                <BookingCard 
                bookingId = {id}
                title = {title}
                location = {location}
                description = {description}
                imgs = {imgs}
                price = {price}
                reviews = {reviews}
                />
          
                <hr className="booking-page__hr hr"/>
                <Amenities 
                amenities = {amenities}
                />
                <hr className="booking-page__hr hr"/>
                <SleepingArrangement
                sleeping_arrangements = {sleeping_arrangements}
                />
                <hr className="booking-page__hr hr"/>
                <Accessibility/>
                
                <hr className="booking-page__hr hr"/>
                <AvailabilitySection
                availability = {availability}
                bookingId = {id}
                />
                <hr className="booking-page__hr hr"/>

                <ReviewSection
                reviews = {reviews}
                />
                <hr className="booking-page__hr hr"/>
                <AboutHost
                host_info = {host_info}
                reviews = {reviews}
                />
                <hr className="booking-page__hr hr"/>
                <Neighborhood/>
                <hr className="booking-page__hr hr"/>
                <Cancellations 
                cancellations = {cancellations}
                house_rules = {house_rules}
                check_in = {check_in}
                check_out = {check_out}
                self_check_in = {self_check_in}
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
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchBookings} from '../../actions/index';
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoogleMap from './GoogleMap';
import avgReview from '../avgReview';

class RoomListingPage extends React.Component{

    //then you call the action to use in here
    componentDidMount(){
        this.props.fetchBookings();
    }
  
    renderSpaceType(space_type, home_type){
        console.log(space_type);
        return <p className = "listings__listing__space-type">{(space_type = "entire_space") ? `Entire ${home_type}` : `Private Room` }</p>
    }

    renderAmenities(amenities){
        console.log(amenities);
        return amenities.map(amenity=>{
            return <li className="listings__listing__amenities__amenity">{amenity}</li>
        })
    }

    renderHomeSpecs(home_specs){
        return(
            <ul className="listings__listing__home-specs">
                <li className="listings__listing__home-specs__spec">{home_specs.numGuests} guests</li>  
                <li className="listings__listing__home-specs__spec">{home_specs.numBedrooms} bedrooms</li> 
                <li className="listings__listing__home-specs__spec">{home_specs.numBeds} beds</li> 
                <li className="listings__listing__home-specs__spec">{home_specs.numBaths.private ? `${home_specs.numBaths.private} baths`:`${home_specs.numBaths.shared} shared baths`}</li> 
            </ul>
        )
    }

    renderList(){
        return this.props.bookings.map(booking=>{
            return (
                <div className="listings__listing" key = {booking.id}>
                    <div className="listings__listing__description">
                        <Link to={`/booking/${booking.id}`} className="listings__listing__title"> {booking.title}</Link>
                        <div className="superhost-tag">superhost</div>
                        {this.renderSpaceType(booking.space_type, booking.home_type)}
                        <p className="listings__listing__home-type">{booking.home_type}</p>
                        <p className="listings__listing__price">${booking.price} / night</p>
                        <p className="wef">{avgReview(booking.reviews,"overall")}</p>
                        {this.renderHomeSpecs(booking.home_specs)}
                        <ul className="listings__listing__amenities">{this.renderAmenities(booking.amenities)}</ul>  
                    </div>
                    <img src={require(`../../img/booking-page/listing-${booking.id}/img-1.jpg`)} alt="" className="listings__listing__img"/>
                </div>
            )
        })
    }


    render(){
        console.log(this.props.bookings)
        return(
            <div>
                <Navigation />
                <div className="listing-page">
                    <h1 className="listing-page__header header-big margin-bottom-large">
                    Room Listing Page
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
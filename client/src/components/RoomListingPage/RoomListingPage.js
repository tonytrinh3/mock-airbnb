import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchBookings} from '../../actions/index';
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoogleMaps from './GoogleMaps';
import avgReview from '../avgReview';

class RoomListingPage extends React.Component{


    
    //then you call the action to use in here
    componentDidMount(){
        this.props.fetchBookings();
    }
  
 
    
    renderList(){
        return this.props.bookings.map(booking=>{
            return (
                <div className="listings__listing " key = {booking.id}>
                      <img className="listings__listing__img" src={require(`../../img/booking-page/listing-${booking.id}/img-1.jpg`)} alt="" />
                    <div className="listings__listing__description">
                        <div className="listings__listing__description__superhost-tag superhost-tag margin-bottom-medium">superhost</div>
                        {this.renderSpaceType(booking.space_type, booking.home_type)}
                        <p className="listings__listing__description__reviews">{avgReview(booking.reviews,"overall")}</p>
                        <Link className="listings__listing__description__title header-medium margin-bottom-medium" to={`/booking/${booking.id}`} > {booking.title}</Link>
                        
                        
                        {this.renderHomeSpecs(booking.home_specs)}
                        <ul className="listings__listing__description__amenities">{this.renderAmenities(booking.amenities)}</ul>  
                        <p className="listings__listing__description__price"><span >${booking.price}</span> / night</p>
                    </div>
                  
                    <hr className="listings__listing__hr hr"/>
                </div>
            )
        })
    }

    renderSpaceType(space_type, home_type){
        //console.log(space_type);
        return <p className = "listings__listing__description__space-type margin-bottom-medium">{(space_type = "entire_space") ? `Entire ${home_type}` : `Private Room` }</p>
    }

    renderAmenities(amenities){
        //console.log(amenities);
        return amenities.map((amenity,i)=>{
            return <li className="listings__listing__description__amenities__amenity" key = {i}>{amenity}</li>
        })
    }

    renderHomeSpecs(home_specs){
        return(
            <ul className="listings__listing__description__home-specs margin-bottom-medium">
                <li className="listings__listing__description__home-specs__spec">{home_specs.numGuests} guests</li>  
                <li className="listings__listing__description__home-specs__spec">{home_specs.numBedrooms} bedrooms</li> 
                <li className="listings__listing__description__home-specs__spec">{home_specs.numBeds} beds</li> 
                <li className="listings__listing__description__home-specs__spec">{home_specs.numBaths.private ? `${home_specs.numBaths.private} baths`:`${home_specs.numBaths.shared} shared baths`}</li> 
            </ul>
        )
    }

    //need to do a mouseover as well
    //pass down picture, superhost, title, space type , price, rating to google map
    render(){
        console.log(this.props.bookings)
        return(
            <div>
                <Navigation />
                <div className="listing-page">
                    
                    <div className="listings">
                        <h1 className="listings__header header-big margin-bottom-large">
                        Room Listing Page
                        </h1>
                        {this.renderList()}
                    </div>
                    <GoogleMaps
                       bookings = {this.props.bookings}
                    />
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
import React from 'react';
import AirbnbPlusCard from '../AirbnbPlusCard';



const FeaturedAirbnbPlus=()=>{
    return (
        <div className="featured-airbnb-plus section-margin">
            <h2 className="header-big margin-bottom-medium">Featured Airbnb Plus destinations</h2>
            <div className="margin-bottom-large">Browse beautiful places to stay with all the comforts of home, plus more.</div>
            <div className="featured-airbnb-plus__cards margin-bottom-large">
                <AirbnbPlusCard/>
            </div>
            <div className="continue-link ">Show more Airbnb Plus destinations -></div>
        </div>
    )
};

export default FeaturedAirbnbPlus;
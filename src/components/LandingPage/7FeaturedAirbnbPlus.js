import React from 'react';
import AirbnbPlusCard from '../AirbnbPlusCard';

import cape_town from '../../img/landing-page/airbnb-plus/cape_town.PNG';
import chicago from '../../img/landing-page/airbnb-plus/chicago.PNG';
import london from '../../img/landing-page/airbnb-plus/london.PNG';


const countries = [
    {
        country: "Cape Town",
        header: "790+ verified stays",
        description: "Find dockside lofts, sunny studios, and more verified places to stay in a city that stuns from sky to sea.",
        picture: cape_town,
    },
    {
        country: "Chicago",
        header: "200+ verified stays",
        description: "Explore Chicago's stunning architecture from the inside — in homes verified for quality and design.",
        picture: chicago,
    },
    {
        country: "London",
        header: "540+ verified stays",
        description: "Explore London from secluded garden flats and luminous loft — all verified for quality and design.",
        picture: london,
    }
];

const renderCountries = countries.map(xcountry =>{
    return <AirbnbPlusCard 
        country = {xcountry.country}
        header = {xcountry.header}
        description = {xcountry.description}
        picture = {xcountry.picture}
        key={xcountry.country}
    />
})


const FeaturedAirbnbPlus=()=>{
    return (
        <div className="featured-airbnb-plus section-margin">
            <h2 className="header-big margin-bottom-medium">Featured Airbnb Plus destinations</h2>
            <div className="margin-bottom-large">Browse beautiful places to stay with all the comforts of home, plus more.</div>
            <div className="featured-airbnb-plus__cards margin-bottom-large">
                {renderCountries}
            </div>
            <div className="continue-link ">Show more Airbnb Plus destinations -></div>
        </div>
    )
};

export default FeaturedAirbnbPlus;
import React from 'react';

import PlacesCards from '../PlacesCard';
import mexico from '../../img/landing-page/superhost/mexico.PNG';
import indonesia from '../../img/landing-page/superhost/indonesia.PNG';
import colombia from '../../img/landing-page/superhost/colombia.PNG';
import united_states from '../../img/landing-page/superhost/united_states.PNG';
import united_states2 from '../../img/landing-page/superhost/united_states2.PNG';
import united_states3 from '../../img/landing-page/superhost/united_states3.PNG';
import united_kingdom from '../../img/landing-page/superhost/united_kingdom.PNG';
import iceland from '../../img/landing-page/superhost/iceland.PNG';


const countries = [
    {
        country: "Mexico",
        description: "The World Famous Seashell House ~ Casa Caracol",
        picture: mexico,
        pricing: "$299",
        rating:"4.75",
        superhost: "superhost"
    },
    {
        country: "Indonesia",
        description: "HIDEOUT BALI - Eco Bamboo Home",
        picture: indonesia,
        pricing: "$75",
        rating:"4.82",
        superhost: "superhost"
    },
    {
        country: "Colombia",
        description: "Romantic Cabana with view",
        picture: colombia,
        pricing: "$40",
        rating:"4.93",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "The Joshua Tree House",
        picture: united_states,
        pricing: "$300",
        rating:"4.88",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "The Mushroom Dome Retreat & LAND of Paradise Suite",
        picture: united_states2,
        pricing: "$130",
        rating:"4.86",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "Underground Hygge",
        picture: united_states3,
        pricing: "$400",
        rating:"4.85",
        superhost: "superhost"
    },
    {
        country: "United Kingdom",
        description: "Live in an historic English Castle!",
        picture: united_kingdom,
        pricing: "$256",
        rating:"4.96",
        superhost: "superhost"
    },
    {
        country: "Iceland",
        description: "Amazing view - Moderne apartment",
        picture: iceland,
        pricing: "$151",
        rating:"4.76",
        superhost: "superhost"
    }
];


const renderPlacesCard = countries.map(xcountry =>{
    return <PlacesCards 
    country = {xcountry.country}
    description = {xcountry.description}
    picture = {xcountry.picture} 
    pricing = {xcountry.pricing} 
    rating = {xcountry.rating}
    superhost = {xcountry.superhost}
    key = {xcountry.description} 
    />
})

const StaySuperhost=()=>{
    return (
        <div className="stay-superhost section-margin">
           <h2 className="header-big margin-bottom-large">Places to stay around the world</h2>
           <div className="stay-superhost__cards margin-bottom-large">
             {renderPlacesCard}
           </div>
           <div className="continue-link ">Show (2000+) -></div>
        </div>
    )
};

export default StaySuperhost;










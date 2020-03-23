import React from 'react';
import canada from '../../img/landing-page/airbnb-adventures/canada-adventure.jpg';
import russia from '../../img/landing-page/airbnb-adventures/russia-adventure.jpeg';
import us from '../../img/landing-page/airbnb-adventures/us-adventure.jpg';
import madagascar from '../../img/landing-page/airbnb-adventures/madagascar-adventure.jpeg';
import india from '../../img/landing-page/airbnb-adventures/india-adventure.jpeg';
import AdventureCard from '../AdventureCard';


// const countries = [canada, russia, us, madagascar,india ];

const countries = [
    {
        country: "Canada",
        description: "Bioluminescent Overnight Yachtstay",
        picture: canada,
        pricing: "From $150/person · 2 days",
        rating:"4.76 (55)"
    },
    {
        country: "Russian Federation",
        description: "Окунитесь в настоящую сельскую жизнь",
        picture: russia,
        pricing: "From $88/person · 2 days",
        rating:"4.50 (67)"
    },
    {
        country: "United States",
        description: "Up North: Kayaking, Glamping, and FUN",
        picture: us,
        pricing: "From $365/person · 3 days",
        rating:"4.80 (452)"
    },
    {
        country: "Madagascar",
        description: "Nature Photography in Madagascar",
        picture: madagascar,
        pricing: "From $7,310/person · 14 days",
        rating:"4.88 (49)"
    },
    {
        country: "India",
        description: "Food & Faith in Southwestern India",
        picture: india,
        pricing: "From $5,225/person · 10 days",
        rating: `4.90 (80)`
    },

]

// const renderAdventureCard = (countries) =>{
//     countries.map(country=>{
//         return <AdventureCard picture = {country}/>
//     })
// };

const renderAdventureCard = countries.map(xcountry=>{
        return <AdventureCard 
        country = {xcountry.country}
        description = {xcountry.description}
        picture = {xcountry.picture} 
        pricing = {xcountry.pricing} 
        rating = {xcountry.rating}
        key = {xcountry.country} 
        />
});

const IntroAirbnbAdventures=()=>{

    return (
        <div className="intro-airbnb-adventures section-margin">
            <h2 className="header-big margin-bottom-medium">Introducing Airbnb Adventures</h2>
            <div className=" margin-bottom-large">Multi-day trips led by local experts — activities, meals, and stays included.</div>
            <div className="adventure-cards margin-bottom-large">
                {renderAdventureCard}
            </div>
            <div className="continue-link ">Show all adventures -></div>
        </div>
    )
};

export default IntroAirbnbAdventures;
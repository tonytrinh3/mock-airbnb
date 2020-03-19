import React from 'react';
import canada from '../../img/landing-page/airbnb-adventures/canada-adventure.jpg';
import russia from '../../img/landing-page/airbnb-adventures/russia-adventure.jpeg';
import us from '../../img/landing-page/airbnb-adventures/us-adventure.jpg';
import madagascar from '../../img/landing-page/airbnb-adventures/madagascar-adventure.jpeg';
import india from '../../img/landing-page/airbnb-adventures/india-adventure.jpeg';
import AdventureCard from '../AdventureCard';

const IntroAirbnbAdventures=()=>{
    return (
        <div className="intro-airbnb-adventures section-margin">
            <h2 className="header-big margin-bottom-medium">Introducing Airbnb Adventures</h2>
            <div className=" margin-bottom-large">Multi-day trips led by local experts — activities, meals, and stays included.</div>
            <div className="adventure-cards margin-bottom-large">
                <AdventureCard picture = {canada}/>
            </div>
            <div className="continue-link ">Show all adventures -></div>
        </div>
    )
};

export default IntroAirbnbAdventures;
import React from 'react';
import adventures from '../../img/landing-page/adventures-image.jpg';
import experiences from '../../img/landing-page/experiences-image.jpg';
import stays from '../../img/landing-page/stays-image.jpg';

const ExploreAirbnb=()=>{
    return (
        <div className="explore-airbnb section-margin">
            <h2 className="explore-airbnb__header header-big">
                Explore Airbnb
            </h2>

            <div className="explore-airbnb__cards ">

                <div className="explore-airbnb__card  explore-airbnb__card--1">
                    <img src={stays} alt="" className = "explore-airbnb__card__picture"/>
                    <h3 className = "explore-airbnb__card__caption header-medium">Stays</h3>
                </div>

                <div className="explore-airbnb__card explore-airbnb__card--2">
                    <img src={experiences} alt="" className = "explore-airbnb__card__picture"/>
                    <h3 className = "explore-airbnb__card__caption header-medium">Experiences</h3>
                </div>

                <div className="explore-airbnb__card explore-airbnb__card--3">
                    <img src={adventures} alt="" className = "explore-airbnb__card__picture"/>
                    <h3 className = "explore-airbnb__card__caption header-medium">Adventures</h3>
                </div>
            </div>

        </div>
    )
};

export default ExploreAirbnb;
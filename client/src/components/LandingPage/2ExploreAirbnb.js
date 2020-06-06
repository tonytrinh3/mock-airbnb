import React from 'react';
import adventures from '../../img/landing-page/adventures-image.jpg';
import experiences from '../../img/landing-page/experiences-image.jpg';
import stays from '../../img/landing-page/stays-image.jpg';
import { Link} from 'react-router-dom';

{/* <Link className="header-medium margin-bottom-medium" to={`/roomListing`}> */}

const ExploreAirbnb=()=>{
    return (
        <div className="explore-airbnb section-margin">
            <h2 className="explore-airbnb__header header-big">
                Explore Airbnb
            </h2>

            <div className="explore-airbnb__cards ">

                <Link className="explore-airbnb__card  explore-airbnb__card--1" to={`/roomListing`}>
                    <img src={stays} alt="" className = "explore-airbnb__card__picture"/>
                    <h3 className = "explore-airbnb__card__caption header-medium">Stays</h3>
                </Link>

                <Link className="explore-airbnb__card explore-airbnb__card--2" to={`/roomListing`}>
                    <img src={experiences} alt="" className = "explore-airbnb__card__picture"/>
                    <h3 className = "explore-airbnb__card__caption header-medium">Experiences</h3>
                </Link>

                <Link className="explore-airbnb__card explore-airbnb__card--3" to={`/roomListing`}>
                    <img src={adventures} alt="" className = "explore-airbnb__card__picture"/>
                    <h3 className = "explore-airbnb__card__caption header-medium">Adventures</h3>
                </Link>
            </div>

        </div>
    )
};

export default ExploreAirbnb;
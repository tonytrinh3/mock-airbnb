import React from 'react';

const PlacesCards = ({country,description,picture,pricing,rating,superhost}) =>{
    return(
        <div className="places-card margin-bottom-large">
            <img src={picture} alt={country} className = "places-card__picture margin-bottom-picture"/>
            <div className="places-card__superhost margin-bottom-medium">{superhost}</div>
            <div className="places-card__country margin-bottom-medium">{country}</div>
            <div className="places-card__rating margin-bottom-medium">{rating}</div>
            <div className="places-card__description margin-bottom-medium">{description}</div>
            <div className="places-card__pricing margin-bottom-medium"> <strong>{pricing}</strong> / night</div>
        </div>
    )
};

export default PlacesCards;
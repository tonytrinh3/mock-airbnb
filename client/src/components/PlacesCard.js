import React from 'react';

const PlacesCards = ({country,description,picture,pricing,rating,superhost}) =>{

    return(
        <div className="places-card margin-bottom-large">
            <img src = {require(`../img/${picture}`)} alt={country} className = "places-card__img margin-bottom-picture"/>
            <div className=" superhost-tag margin-bottom-medium">SUPERHOST</div>
            <div className="places-card__country margin-bottom-medium">{country}</div>
            <div className="places-card__rating margin-bottom-medium">{rating}</div>
            <div className="places-card__description margin-bottom-medium">{description}</div>
            <div className="places-card__pricing margin-bottom-medium"> <strong>{pricing}</strong> / night</div>
        </div>
    )
};

export default PlacesCards;
import React from 'react';

const PlacesCards = (props) =>{
    return(
        <div className="places-card margin-bottom-large">
            <img src={props.picture} alt="pic" className = "places-card__picture margin-bottom-picture"/>
            <div className="places-card__superhost margin-bottom-medium">Superhost</div>
            <div className="places-card__country margin-bottom-medium">Montenegro</div>
            <div className="places-card__rating margin-bottom-medium">4.81</div>
            <div className="places-card__description margin-bottom-medium">Waterfront with extraordinary view</div>
            <div className="places-card__pricing margin-bottom-medium"> <strong>$5,225</strong> / night</div>
        </div>
    )
};

export default PlacesCards;
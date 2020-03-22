import React from 'react';


//props.picture but you can do this due to destructuring
const AdventureCard=({picture,header,description,pricing,rating})=>{
    return (
        <div className="adventure-card">
            <img src={picture} alt="" className="adventure-card__picture margin-bottom-picture"/>
            <h3 className="adventure-card__header margin-bottom-medium">{header}</h3>
            <div className="adventure-card__description margin-bottom-medium">{description}</div>
            <div className="adventure-card__pricing margin-bottom-medium">{pricing}</div>
            <div className="adventure-card__rating rating-font">{rating} </div>
        </div>
    )
};

export default AdventureCard;



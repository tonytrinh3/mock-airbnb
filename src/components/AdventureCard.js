import React from 'react';



const AdventureCard=(props)=>{
    return (
        <div className="adventure-card">
            <img src={props.picture} alt="" className="adventure-card__picture"/>
            <h3 className="adventure-card__header margin-bottom-medium">CANADA</h3>
            <div className="adventure-card__description margin-bottom-medium">Bioluminescent Overnight Yachtstay</div>
            <div className="adventure-card__pricing margin-bottom-medium">From $150/person · 2 days </div>
            <div className="adventure-card__rating rating-font">4.76 (55) </div>
        </div>
    )
};

export default AdventureCard;
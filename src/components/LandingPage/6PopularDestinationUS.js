import React from 'react';

const states = [
    {
        state:"San Francisco",
        pricing:"$216"
    },
    {
        state:"Los Angeles",
        pricing:"$213"
    },
    {
        state:"New York",
        pricing:"$213"
    },
    {
        state:"Seattle",
        pricing:"$134"
    },
    {
        state:"Denver",
        pricing:"$128"
    },
    {
        state:"Washington DC",
        pricing:"$166"
    },
    {
        state:"Phoenix",
        pricing:"$232"
    },
    {
        state:"Austin",
        pricing:"$242"
    },
    {
        state:"Houston",
        pricing:"$351"
    },
    {
        state:"New Orleans",
        pricing:"$210"
    },
];

const tile = (tile_state,tile_pricing) => {
    return (
    <div className="popular-destination-US__tile">
        <div className="popular-destination-US__tile__state margin-bottom-small">{tile_state}</div>
        <div className="popular-destination-US__tile__pricing margin-bottom-large">{tile_pricing}/night average</div>
    </div>
    );
};



const renderTile = states.map(xstate =>{
    return tile(xstate.state, xstate.pricing);
})



const PopularDestinationUS=()=>{
    return (
        <div className="popular-destination-US section-margin">
            <h2 className="header-big margin-bottom-large">Popular destinations in the United States</h2>
            <div className="popular-destination-US__tiles">
                {renderTile}
            </div>
        </div>
    )
};

export default PopularDestinationUS;
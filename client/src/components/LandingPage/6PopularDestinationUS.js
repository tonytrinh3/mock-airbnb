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
        pricing:"$159"
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

const tile = (states) => {
    return (
    <div className="popular-destination-US__tile" key= {states.state}>
        <div className="popular-destination-US__tile__state margin-bottom-small">{states.state}</div>
        <div className="popular-destination-US__tile__pricing text-sub margin-bottom-large">{states.pricing}/night average</div>
    </div>
    );
};



const renderTile = states.map(xstate =>{
    return tile(xstate);
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
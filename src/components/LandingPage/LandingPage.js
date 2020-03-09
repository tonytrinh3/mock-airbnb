import React from 'react';
import Navigation from '../Navigation';
import ExploreAirbnb from './2ExploreAirbnb';
import AirbnbPlusExplore from './3AirbnbPlusExplore';
import IntroAirbnbAdventures from './4IntroAirbnbAdventures';
import PlacesStayAroundWorld from './5PlacesStayAroundWorld';
import PopularDestinationUS from './6PopularDestinationUS';
import FeaturedAirbnbPlus from './7FeaturedAirbnbPlus';
import StaySuperhost from './8StaySuperhost';


const LandingPage=()=>{
    return (
        <div className="LandingPage">
            LandingPage
            <Navigation/>
            <ExploreAirbnb/>
            <AirbnbPlusExplore/>
            <IntroAirbnbAdventures/>
            <PlacesStayAroundWorld/>
            <PopularDestinationUS/>
            <FeaturedAirbnbPlus/>
            <StaySuperhost/>
        </div>
    )
};

export default LandingPage;
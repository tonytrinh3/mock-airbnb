import React from 'react';
import PlacesCards from '../PlacesCard';
import montenegro from '../../img/landing-page/places-stay/Montenegro.jpg';
import belarus from '../../img/landing-page/places-stay/Belarus.jpg';
import portugal from '../../img/landing-page/places-stay/Portugal.jpg';
import south_africa from '../../img/landing-page/places-stay/South_Africa.jpg';
import spain from '../../img/landing-page/places-stay/Spain.jpg';
import greece from '../../img/landing-page/places-stay/Greece.jpg';
import united_states from '../../img/landing-page/places-stay/United_States.jpg';
import cuba from '../../img/landing-page/places-stay/Cuba.jpg';

const PlacesStayAroundWorld=()=>{
    return (
        <div className="places-stay-around-world section-margin">
           <h2 className="header-big margin-bottom-large">Places to stay around the world</h2>
           <div className="places-stay-around-world__cards">
            <PlacesCards picture = {montenegro}/>
            <PlacesCards picture = {belarus}/>
            <PlacesCards picture = {portugal}/>
            <PlacesCards picture = {south_africa}/>

            <PlacesCards picture = {montenegro}/>
            <PlacesCards picture = {belarus}/>
            <PlacesCards picture = {portugal}/>
            <PlacesCards picture = {south_africa}/>
           </div>
         
        </div>
    )
};

export default PlacesStayAroundWorld;

{/* <div className="places-stay-around-world__cards--row-1">
<PlacesCards picture = {montenegro}/>
</div> */}
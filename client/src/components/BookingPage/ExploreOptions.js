import React from 'react';
import PlacesCards from '../PlacesCard';
import montenegro from '../../img/landing-page/places-stay/Montenegro.jpg';
import belarus from '../../img/landing-page/places-stay/Belarus.jpg';
import portugal from '../../img/landing-page/places-stay/Portugal.jpg';


const countries = [
    {
        country: "Montenegro",
        description: "Waterfront with extraordinary view",
        picture: montenegro,
        pricing: "$67",
        rating:"4.81",
        superhost: "superhost"
    },
    {
        country: "Belarus",
        description: "Minsk Belarus Studio in historical center",
        picture: belarus,
        pricing: "$32",
        rating:"4.80",
        superhost: "superhost"
    },
    {
        country: "Portugal",
        description: "Clérigos Room | Historic Centre",
        picture: portugal,
        pricing: "$39",
        rating:"4.67",
        superhost: "superhost"
    }
];


const renderPlacesCard = countries.map(xcountry =>{
    return <PlacesCards 
    country = {xcountry.country}
    description = {xcountry.description}
    picture = {xcountry.picture} 
    pricing = {xcountry.pricing} 
    rating = {xcountry.rating}
    superhost = {xcountry.superhost}
    key = {xcountry.country} 
    />
})

const ExploreOptions = () =>{
    return (
        <div className="explore-homes-section">
            <div className="more-homes-section">
                <h2 className="more-homes-section__header header-big margin-bottom-medium">More homes you may like</h2>
                <div className="more-homes-section__cards">
                    {renderPlacesCard}
                </div>
            </div>
            <div className="explore-options">
                <h2 className="explore-options__header header-big margin-bottom-medium">Explore other options in and around San Francisco</h2>
                <p className="explore-options__subheader margin-bottom-medium">More places to stay in San Francisco: <br/> Houses·Bed and breakfasts·Lofts·Villas·Condominiums</p>
                <ul>
                    <li>San Francisco</li>
                    <li>Berkeley</li>
                    <li>San Jose</li>
                    <li>Napa</li>
                    <li>Oakland</li>
                    <li>South Lake Tahoe</li>
                    <li>Sonoma</li>
                    <li>Mountain View</li>
                    <li>Santa Barbara</li>
                    <li>Santa Cruz</li>
                    <li>Palo Alto</li>
                    <li>Santa Rosa</li>
                </ul>
            </div>
        </div>
    )
}

export default ExploreOptions;
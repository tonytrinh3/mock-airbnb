import React from 'react';

const renderNumBaths = (baths)=>{
    if (baths.shared == false){
        return <li>{baths.private} baths </li>
    } else {
        return <li>{baths.private} shared baths </li>
    }
};

const renderSpace_Type = (space_type) =>{
    console.log(space_type.entire_space)
    if(space_type.entire_space === true){
        return(
            <div>
                <h3 className="header-small">Entire home</h3>
                <p className = "margin-bottom-medium">You’ll have the apartment to yourself.</p>
            </div>
        )
    } else {
        return(
            <div>
                <h3 className="header-small">Private room in house</h3>
                <p className = "margin-bottom-medium">You’ll have a private room in a house</p>
            </div>
        )
    }
};


const ListingDescription = ({title, location, description, home_type, space_type, home_specs,host_info}) =>{




    return (
        //all of this needs to come from backend and all dynamic per person
        <div className="listing-description">
            <h2 className="listing-description__header header-big margin-bottom-medium">{title}</h2>
            <p className="listing-description__location  margin-bottom-medium">{location}</p>
            <ul className = "listing-description__capacity margin-bottom-medium">
                <li>{home_specs.numGuests} guests</li>
                <li>{home_specs.numBedrooms} bedroom</li>
                <li>{home_specs.numBeds} beds</li>
                {renderNumBaths(home_specs.numBaths)}
            </ul>
            {renderSpace_Type({space_type})}
            <h3 className="header-small">Self check-in</h3>
            <p className = "margin-bottom-medium">Check yourself in with the keypad.</p>
            <h3 className="header-small">Sparkling clean</h3>
            <p className = "margin-bottom-medium">12 recent guests said this place was sparkling clean.</p>
            <h3 className="header-small">Todd is a Superhost</h3>
            <p className = "margin-bottom-medium">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            <p className = "margin-bottom-medium">Come stay on the first floor of our beautiful three-story house, complete with a separate entrance and private space including a bedroom, bathroom, living room, and kitchenette. You will also have access to our laundry room and backyard garden, and you can use our kitchen upon request.People from all backgrounds are welcome!</p>
            <a className = "booking-page__link margin-bottom-medium">Read more about the space</a>
            <br/>
            <a className = "booking-page__link margin-bottom-medium">Contact Page</a>
        </div>
    )
}

export default ListingDescription;
import React from 'react';

const ListingDescription = () =>{
    return (
        //all of this needs to come from backend and all dynamic per person
        <div className="listing-description">
            <h2 className="listing-description__header header-big margin-bottom-medium">Private, modern Central Sunset suite</h2>
            <p className="listing-description__location  margin-bottom-medium">Outer Sunset, San Francisco, California</p>
            <ul className = "listing-description__capacity margin-bottom-medium">
                <li>4 guests</li>
                <li>1 bedroom</li>
                <li>2 beds</li>
                <li>2 beds</li>
            </ul>
            <h3 className="header-small">Entire home</h3>
            <p className = "margin-bottom-medium">You’ll have the apartment to yourself.</p>
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
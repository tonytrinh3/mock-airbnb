import React from 'react';





const AboutHost = ({host_info}) =>{
    return(
        <div className="about-host">
            <h2 className="about-host__header header-big margin-bottom-medium">Hosted by Mia</h2>
            <p className="margin-bottom-medium">Madrid, Spain · Joined in April 2014</p>
            <p className="">523 Reviews</p>
            
            <hr className="about-host__hr hr"/>

            <p className="about-host__paragraph margin-bottom-medium">Hi, there. I love to travel and meet people. A cup of great coffee, tasty tapas, wine and cold beer, walking in the park etc.. those make me always happy. Really hope to see you, and wish your happy journey.</p>
            <p className="margin-bottom-medium">Languages: <span className="p-bold">English, 한국어, Español</span></p>
            <p className="margin-bottom-medium">Response rate: <span className="p-bold">100%</span></p>
            <p className="margin-bottom-medium">Response time: <span className="p-bold">within an hour</span></p>
            
            <button className="contact-host__button">Contact Host</button>

            <hr className="about-host__hr hr"/>

            <p className=""><span className="header-small">Always communicate through Airbnb</span> · To protect your payment, never transfer money or communicate outside of the Airbnb website or app. <a href="" className="booking-page__link">Learn more</a></p>
            
            <hr className="about-host__hr hr"/>
            
            <h3 className="header-small margin-bottom-medium">About this place</h3>
            <p className="">When you stay in an Airbnb, you’re staying at someone’s place.</p>
           
            <hr className="about-host__hr hr"/>
            
            <div className="about-host__host-split">
                <p className="">This is Mia's Place</p>
                <p className="">Juana Y Oleg helps host.</p>
            
            </div>
        </div>
    )
};

export default AboutHost;
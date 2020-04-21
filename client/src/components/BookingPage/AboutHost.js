import React from 'react';





const AboutHost = () =>{
    return(
        <div className="about-host">
            <h2 className="about-host__header header-big margin-bottom-medium">Hosted by Mia</h2>
            <p className="margin-bottom-medium">Madrid, Spain · Joined in April 2014</p>
            <p className="margin-bottom-medium">523 Reviews</p>
            <p className="about-host__paragraph margin-bottom-medium">Hi, there. I love to travel and meet people. A cup of great coffee, tasty tapas, wine and cold beer, walking in the park etc.. those make me always happy. Really hope to see you, and wish your happy journey.</p>
            <p className="margin-bottom-medium">Languages: <span className="header-small">English, 한국어, Español</span></p>
            <p className="margin-bottom-medium">Response rate: <span className="header-small">100%</span></p>
            <p className="margin-bottom-medium">Response time: <span className="header-small">within an hour</span></p>
            <button className="contact-host__button margin-bottom-medium">Contact Host</button>
            <p className="margin-bottom-medium"><span className="header-small">Always communicate through Airbnb</span> · To protect your payment, never transfer money or communicate outside of the Airbnb website or app. <a href="" className="booking-page__link">Learn more</a></p>
            <h3 className="header-small margin-bottom-medium">About this place</h3>
            <p className="margin-bottom-medium">When you stay in an Airbnb, you’re staying at someone’s place.</p>
            <div className="about-host__host-split">
                <p className="margin-bottom-medium">This is Mia's Place</p>
                <p className="margin-bottom-medium">Juana Y Oleg helps host.</p>
            </div>
        </div>
    )
};

export default AboutHost;
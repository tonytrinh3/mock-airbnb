import React from 'react';

const ReviewSection = () => {
    return(
    <div className="review-section">
        <h2 className="review-section__header header-big margin-bottom-medium">Reviews</h2>
        <div className="review-section__preview">
            <p className="review-section__preview--rating margin-bottom-medium">4.73</p>
            <p className="review-section__preview--count margin-bottom-medium">523 reviews</p>
            <p className="review-section__preview--search margin-bottom-medium">Search Review</p>
        </div>
        <ul className="review-section__breakdown margin-bottom-medium">
            <li className="review-section__breakdown--item">Communication</li>
            <li className="review-section__breakdown--item">Communication</li>
            <li className="review-section__breakdown--item">Check-in</li>
            <li className="review-section__breakdown--item">Check-in</li>
            <li className="review-section__breakdown--item">Cleanliness</li>
            <li className="review-section__breakdown--item">Cleanliness</li>
            <li className="review-section__breakdown--item">Location</li>
            <li className="review-section__breakdown--item">Location</li>
            <li className="review-section__breakdown--item">Accuracy</li>
            <li className="review-section__breakdown--item">Accuracy</li>
            <li className="review-section__breakdown--item">Value</li>
            <li className="review-section__breakdown--item">Value</li>
        </ul>

        <div className="review-section__reviews">
            <h3 className="header-small">Laurie</h3>
            <h3 className="header-small">March 2020</h3>
            <p className="">Our stay was great.... until the COVID virus threw a wrench in everyone's lives. Yael was very sweet - offering to share a meal, her car, and any help we needed during our stay. We'd love to come back another time and enjoy the restaurants in the neighborhood. 
            Highly recommend the both the host and the location.</p>
        </div>

        <hr className="review-section__hr hr"/>
        
        <div className="review-section__reviews">
            <h3 className="header-small">Shannon</h3>
            <h3 className="header-small margin-bottom-medium">March 2020</h3>
            <p className="margin-bottom-medium">Yale’s place was very clean and exactly as pictured. She was easy to communicate with and very helpful. 
            She connected us with a great babysitter and had a pack and play for us to use. Thanks, Yael!</p>
        </div>

    </div>
    )

};

export default ReviewSection;
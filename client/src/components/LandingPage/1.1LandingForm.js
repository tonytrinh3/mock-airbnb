import React from 'react';
import DateAndGuestsForm from '../DateAndGuestsForm'
import {Link} from 'react-router-dom';


class LandingForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchLocation: null
        }
    }


    render(){
        return (
            <div className="landing-page-form">
                <h2 className="landing-page-form__header">
                    Book unique places to 
                    <br/> stay and things to do.
                </h2>
    
                <div className="landing-page-form__section">
                    <h3 className ="header-small margin-bottom-medium">WHERE</h3>
                    <input className = "landing-page-form__input input-default margin-bottom-medium-2 " type="text" id="location" name="location" placeholder="San Francisco" />
                </div>
            

                <div className="landing-page-form__section">
                    <h3 className ="header-small margin-bottom-medium">DATE</h3>
                    <DateAndGuestsForm
                        pageType = {"Landing Page"}
                        btnType = {"Search"}
                    />
                </div>
         
    
                <Link  to={`/roomListing`} ><button className="landing-page-form__button search__button button">Search</button></Link>

                
                
            
            </div>
        )
    }

   
};

export default LandingForm;
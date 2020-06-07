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
            <div className="forms">
                <h2 className="forms__header">
                    Book unique places to 
                    <br/> stay and things to do.
                </h2>
    
                <div className="forms__location">
                    <h3 className ="header-small margin-bottom-medium">WHERE</h3>
                    <input className = "forms__input input-default" type="text" id="location" name="location" placeholder="San Francisco" />
                </div>
    
                <DateAndGuestsForm
                    pageType = {"Landing Page"}
                    btnType = {"Search"}
                />
    
                <Link  to={`/roomListing`} ><button className="search__button button">Search</button></Link>

                
                
            
            </div>
        )
    }

   
};

export default LandingForm;
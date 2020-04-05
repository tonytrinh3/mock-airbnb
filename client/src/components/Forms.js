import React from 'react';


const Forms=()=>{
    return (
        <div className="forms">
            <h2 className="form__header">
                Book unique places to 
                <br/> stay and things to do.
            </h2>

            <div className="form__location">
                <h3 className ="header-small">WHERE</h3>
                <input className = "form__input input-default" type="text" id="location" name="location" placeholder="Anywhere" ></input>
            </div>

            <div className="form__check-option">
                <div className="form__check-option--in">
                    <h3 className ="header-small">CHECK-IN</h3>
                    <input className = "form__input input-default" type="text" id="optionIn" name="optionIn" placeholder="mm/dd/yyyy" ></input>
                </div>

                <div className="form__check-option--out">
                    <h3 className ="header-small">CHECK-OUT</h3>
                    <input className = "form__input input-default" type="text" id="optionOut" name="optionOut" placeholder="mm/dd/yyyy" ></input>
                </div>
            </div>

            <div className="form__guests">
                <h3 className ="header-small">GUESTS</h3>
                <input className = "form__input input-default" type="text" id="guests" name="guests" placeholder="Guests" ></input>
            </div>

            <button className="search__button button">Search</button>
        


        </div>
    )
};

export default Forms;
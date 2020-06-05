import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import "./react_dates_overrides.css"
import { DateRangePicker } from 'react-dates';
import moment from 'moment';


class Forms extends React.Component{

    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        numAdults: 0,
        numChildren: 0,
        numInfants: 0,
        toggleBtn: false,
        searchLocation: null,

    };

    toggleButton =()=>{
        (!this.state.toggleBtn)
        ? this.setState({
            toggleBtn: true
        })
        : this.setState({
            toggleBtn: false
        })
    }

    renderNumPeople = ()=>{
        return(
            <div className="forms__guests">

                    <div className="forms__guests__type">
                        <p className="forms__guests__type__person form__guests__type__person--adult">Adults</p>
                    </div>
          
                    <div className="forms__guests__counter">
                        <button className="forms__guests__counter__btn" onClick= {()=>{this.subtractionButton("adults")}} >-</button>
                        <p className="forms__guests__counter__num">{this.state.numAdults}</p>
                        <button className="forms__guests__counter__btn " onClick= {()=>{this.additionButton("adults")}}>+</button>
                    </div>
             

                
                    <div className="forms__guests__type">
                        <p className="forms__guests__type__person">Children</p>
                        <p className="forms__guests__type__person__description">Ages 2–12</p>
                    </div>

                    <div className="forms__guests__counter">
                        <button className="forms__guests__counter__btn" onClick= {()=>{this.subtractionButton("children")}} >-</button>
                        <p className="forms__guests__counter__num">{this.state.numChildren}</p>
                        <button className="forms__guests__counter__btn" onClick= {()=>{this.additionButton("children")}}>+</button>
                    </div>

           
                    <div className="forms__guests__type">
                        <p className="forms__guests__type__person">Infant</p>
                        <p className="forms__guests__type__person__description">Under 2</p>
                    </div>
                    <div className="forms__guests__counter">
                        <button className="forms__guests__counter__btn" onClick= {()=>{this.subtractionButton("infants")}} >-</button>
                        <p className="forms__guests__counter__num">{this.state.numInfants}</p>
                        <button className="forms__guests__counter__btn" onClick= {()=>{this.additionButton("infants")}}>+</button>
                    </div>
                </div>
               
         
        )
    }



    additionButton (type) {
        //have this work for whatever type of people passed in
        //have if statement to stop button when the number of guest from booking exceeds it
        switch(type){
            case "adults":
                this.setState({
                    numAdults: this.state.numAdults + 1
                });
                break;
            case "children":
                this.setState({
                    numChildren: this.state.numChildren + 1
                });
                break;
            case "infants":
                this.setState({
                    numInfants: this.state.numInfants + 1
                });
                break;
        }
    }

    subtractionButton(type){
    
            switch(type){
                case "adults":
                    if(this.state.numAdults > 0){ 
                        this.setState({
                            numAdults: this.state.numAdults - 1
                        });
                    }
                    break;
                case "children":
                    if(this.state.numChildren > 0){ 
                        this.setState({
                            numChildren: this.state.numChildren - 1
                        });
                    }
                    break;
                case "infants":
                    if(this.state.numInfants > 0){ 
                        this.setState({
                            numInfants: this.state.numInfants - 1
                        });
                    }
                    break;
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
                    <input className = "forms__input input-default" type="text" id="location" name="location" placeholder="Anywhere" ></input>
                </div>
    
                {/* <div className="form__check-option">
                    <div className="form__check-option--in">
                        <h3 className ="header-small margin-bottom-medium">CHECK-IN</h3>
                        <input className = "form__input input-default" type="text" id="optionIn" name="optionIn" placeholder="mm/dd/yyyy" ></input>
                    </div>
    
                    <div className="form__check-option--out">
                        <h3 className ="header-small margin-bottom-medium">CHECK-OUT</h3>
                        <input className = "form__input input-default" type="text" id="optionOut" name="optionOut" placeholder="mm/dd/yyyy" ></input>
                    </div>
                </div> */}
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
                
    
                <section className="forms__guests-section">
                    <h3 className ="header-small margin-bottom-medium">GUESTS</h3>
                    <button className = "forms__input input-default" type="text" id="guests" name="guests" placeholder="Guests" onClick={this.toggleButton} >Add guests</button>
                    {this.state.toggleBtn? this.renderNumPeople(): null}
                </section>
                
                {!this.state.toggleBtn? <button className="search__button button">Search</button>: null}
                
            
            </div>
        )
    }

   
};

export default Forms;
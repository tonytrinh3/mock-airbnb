import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import "./react_dates_overrides.css"
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import { connect } from 'react-redux';
import {createUserReservation} from "../actions";



class DateAndGuestsForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            startDate: null,
            endDate: null,
            focusedInput: null,
            numAdults: 0,
            numChildren: 0,
            numInfants: 0,
            numTotal: 0,
            toggleDropdown: false,
    
        }
        
    }


   

    onSubmit = () =>{
        const reservation = {
            "reservation": {
                bookingId: this.props.bookingId,
                startDate: moment(this.state.startDate).format('MMMM Do YYYY'),
                endDate: moment(this.state.endDate).format('MMMM Do YYYY'),
                numAdults: this.state.numAdults,
                numChildren: this.state.numChildren,
                numInfants: this.state.numInfants,

                title: this.props.title,
                description: this.props.description,
                location: this.props.location,
                imgs: this.props.imgs
            
            }

        }

        this.props.createUserReservation(reservation);
    }


    toggleDropdown =()=>{
        (!this.state.toggleDropdown)
        ? this.setState({
            toggleDropdown: true
        })
        : this.setState({
            toggleDropdown: false
        });

    }

    renderNumPeople = ()=>{
        return(
            <div className="forms__guests__dropdown">

                <div className="forms__guests__dropdown__type">
                    <p className="forms__guests__dropdown__type__person form__guests__dropdown__type__person--adult">Adults</p>
                </div>
        
                <div className="forms__guests__dropdown__counter">
                    <button className="forms__guests__dropdown__counter__btn" onClick= {()=>{this.subtractionButton("adults")}} >-</button>
                    <p className="forms__guests__dropdown__counter__num">{this.state.numAdults}</p>
                    <button className="forms__guests__dropdown__counter__btn " onClick= {()=>{this.additionButton("adults")}}>+</button>
                </div>
            

            
                <div className="forms__guests__dropdown__type">
                    <p className="forms__guests__dropdown__type__person">Children</p>
                    <p className="forms__guests__dropdown__type__person__description">Ages 2–12</p>
                </div>

                <div className="forms__guests__dropdown__counter">
                    <button className="forms__guests__dropdown__counter__btn" onClick= {()=>{this.subtractionButton("children")}} >-</button>
                    <p className="forms__guests__dropdown__counter__num">{this.state.numChildren}</p>
                    <button className="forms__guests__dropdown__counter__btn" onClick= {()=>{this.additionButton("children")}}>+</button>
                </div>

        
                <div className="forms__guests__dropdown__type">
                    <p className="forms__guests__dropdown__type__person">Infant</p>
                    <p className="forms__guests__dropdown__type__person__description">Under 2</p>
                </div>
                <div className="forms__guests__dropdown__counter">
                    <button className="forms__guests__dropdown__counter__btn" onClick= {()=>{this.subtractionButton("infants")}} >-</button>
                    <p className="forms__guests__dropdown__counter__num">{this.state.numInfants}</p>
                    <button className="forms__guests__dropdown__counter__btn" onClick= {()=>{this.additionButton("infants")}}>+</button>
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
                    numAdults: this.state.numAdults + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            case "children":
                this.setState({
                    numChildren: this.state.numChildren + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            case "infants":
                this.setState({
                    numInfants: this.state.numInfants + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
        }
    }

    subtractionButton(type){
        switch(type){
            case "adults":
                if(this.state.numAdults > 0){ 
                    this.setState({
                        numAdults: this.state.numAdults - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            case "children":
                if(this.state.numChildren > 0){ 
                    this.setState({
                        numChildren: this.state.numChildren - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            case "infants":
                if(this.state.numInfants > 0){ 
                    this.setState({
                        numInfants: this.state.numInfants - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
        }
           
    }

   

    render(){

        const {
            pageType,
            btnType,
        } = this.props;
    
        return (
            <div>
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
                
    
                <section className="forms__guests">
                    <h3 className ="header-small margin-bottom-medium">GUESTS</h3>
                    <button className = "input-default" onClick={this.toggleDropdown}>
                        {this.state.numTotal ===0? <p className="awef">Add guests</p> : <p className="awef">{this.state.numTotal} guests</p> }
                    </button>
                    {this.state.toggleDropdown? this.renderNumPeople(): null}

                </section>
                
                {btnType === "Reserve"? <button className="awef" onClick = {this.onSubmit}>Reserve</button> : null}
                
            
            </div>
        )
    }

   
};




export default connect(null,{createUserReservation})(DateAndGuestsForm);


// export default DateAndGuestsForm;
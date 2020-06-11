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
            showError: false
    
        }
        
    }


    onSubmit = () =>{
        const {
            bookingId,
            description,
            imgs,
            location,
            title

        } = this.props;
        
        const{
            numAdults,
            numChildren,
            numInfants,
            numTotal,
            startDate,
            endDate

        } = this.state;

        const reservation = {
            "reservation": {
                bookingId,
                startDate: moment(startDate).format('MMMM Do YYYY'),
                endDate: moment(endDate).format('MMMM Do YYYY'),
                numAdults,
                numChildren,
                numInfants,
                title,
                description,
                location,
                imgs
            
            }

        }

        if(startDate === null || endDate === null || numTotal ===0){
            this.setState({
                showError: true
            })
        } else {

            this.setState({
                showError: false
            })

            this.props.createUserReservation(reservation);
        }
        
        // if(!(startDate === null) && !(endDate === null) && numTotal > 0 ){
        //     this.props.createUserReservation(reservation);
           
        // }

    }

    

    renderError(){
        const {
            startDate,
            numTotal
        } = this.state;


        //this is always going to change when the state changes due to other functions running to change the state
        if (startDate === null & numTotal === 0){
            return <p className="error-statement">Please enter a start date, end date, and amount of people for the reservation</p>
        } else if (startDate === null && numTotal > 0 ){
            return <p className="error-statement">Please enter a start date and end date for the reservation</p>
        } else if(!(startDate === null) && numTotal === 0  ){
            return <p className="error-statement">Please enter an amount of people for the reservation</p>
        } else{
            return null;
        }
     
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

    additionButton (type) {
        //have this work for whatever type of people passed in
        //have if statement to stop button when the number of guest from booking exceeds it
        switch(type){
            case "Adults":
                this.setState({
                    numAdults: this.state.numAdults + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            case "Children":
                this.setState({
                    numChildren: this.state.numChildren + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            case "Infants":
                this.setState({
                    numInfants: this.state.numInfants + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
        }
    }

    
    subtractionButton(type){
        switch(type){
            case "Adults":
                if(this.state.numAdults > 0){ 
                    this.setState({
                        numAdults: this.state.numAdults - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            case "Children":
                if(this.state.numChildren > 0){ 
                    this.setState({
                        numChildren: this.state.numChildren - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            case "Infants":
                if(this.state.numInfants > 0){ 
                    this.setState({
                        numInfants: this.state.numInfants - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
        }
           
    }

 

    renderNumPeople = ()=>{

        // const types = ["Adults","Children","Infants"];
        // const typeState = [this.state.numAdults,this.state.numChildren,this.state.numInfants]
        // return types.map((type,i)=>{
        //     return(
        //     <div key ={i}>
        //         <div className="date-guest-forms__guests__dropdown__type">
        //             <p className="date-guest-forms__guests__dropdown__type__person">{type}</p>
        //             <p className="date-guest-forms__guests__dropdown__type__person__description">Ages 2–12</p>
        //         </div>
        
        //         <div className="date-guest-forms__guests__dropdown__counter">
        //             <button className="date-guest-forms__guests__dropdown__counter__btn" onClick= {()=>{this.subtractionButton("Adults")}} >-</button>
        //             <p className="date-guest-forms__guests__dropdown__counter__num">{typeState[i]}</p>
        //             <button className="date-guest-forms__guests__dropdown__counter__btn " onClick= {()=>{this.additionButton({type})}}>+</button>
        //         </div>
        //     </div>
        //     )
        // })

        return(
            <div className="date-guest-forms__guests__dropdown">
        
                <div className="date-guest-forms__guests__dropdown__type">
                    <p className="date-guest-forms__guests__dropdown__type__person form__guests__dropdown__type__person--adult">Adults</p>
                </div>
        
                <div className="date-guest-forms__guests__dropdown__counter">
                    <div className="counter-button" onClick= {()=>{this.subtractionButton("Adults")}} >-</div>
                    <p className="date-guest-forms__guests__dropdown__counter__num">{this.state.numAdults}</p>
                    <div className="counter-button" onClick= {()=>{this.additionButton("Adults")}}>+</div>
                </div>
            
                <div className="date-guest-forms__guests__dropdown__type">
                    <p className="date-guest-forms__guests__dropdown__type__person">Children</p>
                    <p className="date-guest-forms__guests__dropdown__type__person__description">Ages 2–12</p>
                </div>
        
                <div className="date-guest-forms__guests__dropdown__counter">
                    <div className="counter-button" onClick= {()=>{this.subtractionButton("Children")}} >-</div>
                    <p className="date-guest-forms__guests__dropdown__counter__num">{this.state.numChildren}</p>
                    <div className="counter-button" onClick= {()=>{this.additionButton("Children")}}>+</div>
                </div>
        
        
                <div className="date-guest-forms__guests__dropdown__type">
                    <p className="date-guest-forms__guests__dropdown__type__person">Infant</p>
                    <p className="date-guest-forms__guests__dropdown__type__person__description">Under 2</p>
                </div>
        
                <div className="date-guest-forms__guests__dropdown__counter">
                    <div className="counter-button" onClick= {()=>{this.subtractionButton("Infants")}} >-</div>
                    <p className="date-guest-forms__guests__dropdown__counter__num">{this.state.numInfants}</p>
                    <div className=" counter-button" onClick= {()=>{this.additionButton("Infants")}}>+</div>
                </div>

                <p className="date-guest-forms__guests__dropdown__close" onClick={this.toggleDropdown}>Close</p>
            </div>
        )



    }




  


    render(){

        const {
            startDate,
            endDate,
            focusedInput,
            numTotal,
            toggleDropdown,
            showError

        } = this.state;




        return (
            <div className = "date-guest-forms">
                <section className="date-guest-forms__section">
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
                </section>
             
               <section className="date-guest-forms__section">
                    <h3 className ="header-small margin-bottom-medium">Guests</h3>
                    <div className = "date-guest-forms__guests input-default" onClick={this.toggleDropdown}>
                        {numTotal ===0? "Add guests" : `${numTotal} guests` }
                    </div>
                    {toggleDropdown? this.renderNumPeople(): null}
                </section>
                {showError ? this.renderError(): null}


               {this.props.btnType === "Reserve"? <button className="reserve-button button" onClick = {this.onSubmit}>Reserve</button> : null}
                
            </div>
        )
    }

   
};




export default connect(null,{createUserReservation})(DateAndGuestsForm);


// export default DateAndGuestsForm;



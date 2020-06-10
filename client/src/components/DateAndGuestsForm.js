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
        
        if(!(startDate === null) && !(endDate === null) && numTotal > 0 ){
            this.props.createUserReservation(reservation);
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
                console.log(this.state.numAdults);
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



    // renderError(){
    //     if(!(startDate === null) && !(endDate === null) && numTotal > 0 ){
    //         return <p className="awef">
    //             Please enter 
    //         </p>
    //     }
    // }


  


    render(){
        return (
            <div className = "date-guest-forms">
                <section className="date-guest-forms__section">
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
                </section>
             
               <section className="date-guest-forms__section">
                    <h3 className ="header-small margin-bottom-medium">Guests</h3>
                    <div className = "input-default" onClick={this.toggleDropdown}>
                        {this.state.numTotal ===0? "Add guests" : `${this.state.numTotal} guests` }
                    </div>
                    {this.state.toggleDropdown? this.renderNumPeople(): null}
                </section>

               {this.props.btnType === "Reserve"? <button className="reserve-button button" onClick = {this.onSubmit}>Reserve</button> : null}
                
            </div>
        )
    }

   
};




export default connect(null,{createUserReservation})(DateAndGuestsForm);


// export default DateAndGuestsForm;



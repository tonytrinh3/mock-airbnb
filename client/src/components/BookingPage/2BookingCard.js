import React from 'react';
// import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {createUserReservation} from "../../actions";

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import "./react_dates_overrides.css"
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class BookingCard extends React.Component{

    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        numAdults: 0,
        numChildren: 0,
        numInfants: 0
    };

    //yeah so you just need a button to increase a number and that number is saved in the state.
 
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

    renderNumPeople = ()=>{
        return(
            <div className="awef">
                Adults
                <button className="awef" onClick= {()=>{this.subtractionButton("adults")}} >-</button>
                {this.state.numAdults}
                <button className="awef" onClick= {()=>{this.additionButton("adults")}}>+</button>
                <br/>
                Children
                <button className="awef" onClick= {()=>{this.subtractionButton("children")}} >-</button>
                {this.state.numChildren}
                <button className="awef" onClick= {()=>{this.additionButton("children")}}>+</button>
                <br/>
                Infants
                <button className="awef" onClick= {()=>{this.subtractionButton("infants")}} >-</button>
                {this.state.numInfants}
                <button className="awef" onClick= {()=>{this.additionButton("infants")}}>+</button>
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
        //this.props is from reduxform
        console.log(this.props);
        return( 
            <div className="booking-card">
                bookingcard <br/>
          
               {this.renderNumPeople()}


                <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
            />
            <button className="awef" onClick = {this.onSubmit}>Reserve</button>

            </div>

        )
    }
};





export default connect(null,{createUserReservation})(BookingCard);



// onSubmit = (formValues) =>{
//     this.props.createUserReservation(this.props.bookingId, formValues);
// }

// <div className="awef">
// <div className="awef" style = {{color:"blue"}}>Create a Booking</div>
// <BookingForm onSubmit = {this.onSubmit}/>
// </div>







// export default connect(mapStateToProps,{createBooking})(BookingCard);



// const mapStateToProps = (state) =>{
//     console.log(state);
//     return {isSignedInM: state.authy.isSignedInssss};
// }

// export default connect(
//     mapStateToProps,
//     {signIn, signOut}
// )(GoogleAuth);

{/* <div className="aewf">Booking Ccard</div> */}


// renderError(error,touched){
//     if(error && touched){
//         return(
//             <div style = {{color: "red" }}>{error}</div>
//         )
//     }
// }




// renderInput=(formProps)=>{
//     // console.log(formProps);
//     // return <input onChange = {formProps.input.onChange} value = {formProps.input.value}/>;
//     //console.log(formProps.meta)
//     return(
//         <div className="aerwf">
          
//             <label>{formProps.label}</label>
//             <input {...formProps.input} autoComplete="off"/>
//             {this.renderError(formProps.meta.error, formProps.meta.touched)}
//         </div>
//     ) 
// }

// //so all of this form stuff creates an object - 
// // onSubmit=(formValues)=>{
// //     //prevent broswer to refresh when you submit
// //     // event.preventDefault();
// //     console.log(formValues);
// //     const testing = {
// //         testssss: 1,
// //         test: 2
// //     }
// //     this.props.createBooking(testing);
// // }

// onSubmit=(formValues)=>{
//     //prevent broswer to refresh when you submit
//     // event.preventDefault();
//     //console.log(formValues);
//     // const testing = {
//     //     tony: 1,
//     //     tonyss: 2
//     // }
//     //so basically when you pass something through the actions - that gets posted in the db.json... - you can click a button to trigger the function or even have the function run when you load the sheet 
//     // this.props.createBooking(testing);
//     this.props.createBooking(formValues);
// }


// render(){
//     //this.props is from reduxform
//     //console.log(this.props);
//     return( 
//         <div className="awef">
//      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//             <Field name = "title" component = {this.renderInput}  label ="enter something"/>
//             <Field name = "description" component = {this.renderInput} label ="enter nothing" />
//             <button  className="awef">Submit</button>
//         </form>
//       {/* <button  onClick = {this.onSubmit} className="awef">Submit</button> */}
//         </div>

      
//     )
// }
// };

// const validate = (formValues) =>{
// const errors = {};

// if(!formValues.title){
//     errors.title = 'you must enter a title'
// }

// if(!formValues.description){
//     errors.description = 'you must enter a description'
// }

// return errors;

// }


// const formWrapped = reduxForm({
// form: "BookingCard",
// validate: validate
// })(BookingCard);

// //state has all the state in the store
// // const mapStateToProps = (state) =>{
// //     console.log(state);
// //     return {something: state}
// // }

// export default connect(null,{createBooking})(formWrapped);

// // export default connect(mapStateToProps,{createBooking})(BookingCard);



// // const mapStateToProps = (state) =>{
// //     console.log(state);
// //     return {isSignedInM: state.authy.isSignedInssss};
// // }

// // export default connect(
// //     mapStateToProps,
// //     {signIn, signOut}
// // )(GoogleAuth);

// {/* <div className="aewf">Booking Ccard</div> */}
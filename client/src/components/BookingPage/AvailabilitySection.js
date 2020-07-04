import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class AvailabilitySection extends React.Component{

    state = {
        startDate: null,
        endDate: null,
        focusedInput: null
    };


    render(){
        return(
            <div className="availability-section">
                <h2 className="margin-bottom-large header-medium">Availability</h2>
                
                <DayPickerRangeController
                    startDateId= "startDate"
                    endDateId= "endDate"
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                    numberOfMonths = {2}
                /> 
            </div>
        )
    }

}

export default AvailabilitySection;
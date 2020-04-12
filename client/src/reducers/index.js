import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
    authy: authReducer,
    form: formReducer,
    bookings: bookingReducer
});
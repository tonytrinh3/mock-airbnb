import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import userReducer from './userReducer'

export default combineReducers({
    auth: authReducer,
    bookings: bookingReducer,
    userReservations: userReducer
});
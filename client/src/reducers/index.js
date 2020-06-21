import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import userReducer from './userReducer'

//as a substitute until express and mongodb comes
import roomsReducer from './roomsReducer';

export default combineReducers({
    auth: authReducer,
    bookings: bookingReducer,
    userReservations: userReducer,
    rooms: roomsReducer
});
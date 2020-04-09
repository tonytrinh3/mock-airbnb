import bookings from '../apis/bookings';
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_BOOKING,
    FETCH_BOOKINGS,
    FETCH_BOOKING,
    DELETE_BOOKING,
    EDIT_BOOKING,
} from './types';





export const signIn = (userId) =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};

export const createBooking = (formValues)=>{
    return async (dispatch) =>{
        //have it saved to a variable so you can use it 
        const response = await bookings.post('/bookings', formValues);

        //dispatch is from axios, payload property from axios has response
        dispatch({type: CREATE_BOOKING, payload: response.data})
    }
};

export const fetchBookings = () => async dispatch =>{
    const response = await bookings.get('/bookings');

    dispatch({type: FETCH_BOOKINGS, payload: response.data});
};

export const fetchBooking = (id) => async dispatch =>{
    const response = await bookings.get(`/bookings/${id}`);

    dispatch({type: FETCH_BOOKING, payload: response.data});
};

export const editBooking = (id, formValues) => async dispatch =>{
    const response = await bookings.get(`/bookings/${id}`,formValues );

    dispatch({type: EDIT_BOOKING, payload: response.data});
};

export const deleteBooking = (id) => async dispatch =>{
    await bookings.delete(`/streams/${id}`);

    dispatch ({type: DELETE_BOOKING, payload: id });
}
import bookings from '../apis/bookings';
import history from '../history';
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_BOOKING,
    FETCH_BOOKINGS,
    FETCH_BOOKING,
    DELETE_BOOKING,
    EDIT_BOOKING,
    CREATE_USER_RESERVATION
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
    return async (dispatch, getState) =>{
        //getState is another function from redux to reach other to other reducers and get the state and use it in other reducers
        //this will be helpful when creating a reservation for the user
        const {userId} = getState().authy;

        //have it saved to a variable so you can use it 
        // /bookings , the bookings part is actually the name of the object that you are dumping and calling info from
        const response = await bookings.post('/bookings', {...formValues, userId});
        console.log(response);
        //await bookings.post('/bookings', formValues);

        //dispatch is from redux, payload property from axios has response
        //  const test = dispatch({type: CREATE_BOOKING, payload: response.data});

        dispatch({type: CREATE_BOOKING, payload: response.data});
        //programmatically navigator user - push is how to nav user around
        history.push('/');
        //  console.log(test);
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
    const response = await bookings.patch(`/bookings/${id}`,formValues );
    //put request - update all properties of a record
    //patch - update some of the properties of a record

    dispatch({type: EDIT_BOOKING, payload: response.data});

    history.push('/booking');
};

export const deleteBooking = (id) => async dispatch =>{
    await bookings.delete(`/bookings/${id}`);

    dispatch ({type: DELETE_BOOKING, payload: id });
}

export const createUserReservation = (bookingId, formValues)=>{
    return async (dispatch, getState) =>{
        //getState is another function from redux to reach other to other reducers and get the state and use it in other reducers
        //this will be helpful when creating a reservation for the user
        const {userId} = getState().authy;
        //this user variable ends up in the db.json
        const bookingInfo = getState().bookings[bookingId];

        //have it saved to a variable so you can use it 
        // /bookings , the bookings part is actually the name of the object that you are dumping and calling info from
        
        const response = await bookings.post('/user',{...formValues,userId,bookingInfo});
        console.log(response);
        //await bookings.post('/bookings', formValues);

        //dispatch is from redux, payload property from axios has response
        //  const test = dispatch({type: CREATE_BOOKING, payload: response.data});

        dispatch({type: CREATE_USER_RESERVATION, payload: response.data});
        //programmatically navigator user - push is how to nav user around
        history.push('/roomlisting');
        //  console.log(test);
    }
};
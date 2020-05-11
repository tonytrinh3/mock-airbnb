import {SIGN_IN, SIGN_OUT} from '../actions/types';


//caps mean don't try to change this
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}


export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case SIGN_IN:
            //take whatever is in that state and return it in new object
            return {...state, isSignedIn: true, userId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}
        default:
            return state;
    }

}
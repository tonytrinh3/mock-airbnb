import {SIGN_IN, SIGN_OUT} from '../actions/types';


//caps mean don't try to change this
const INITIAL_STATE = {
    isSignedInssss: null,
    userId: null
}


export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case SIGN_IN:
            //take whatever is in that state and return it in new object
            return {...state, isSignedInssss: true, userId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedInssss: false, userId: null}
        default:
            return state;
    }

}
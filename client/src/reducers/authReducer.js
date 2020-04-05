import {SIGN_IN, SIGN_OUT} from '../actions/types';


//caps mean don't try to change this
const INITIAL_STATE = {
    isSignedIn: null
}


export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case SIGN_IN:
            //take whatever is in that state and return it in new object
            return {...state, isSignedIn: true}
        case SIGN_OUT:
            return {...state, isSignedIn: false}
        default:
            return state;
    }

}
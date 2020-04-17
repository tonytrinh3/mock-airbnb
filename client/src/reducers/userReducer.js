import {CREATE_USER_RESERVATION} from '../actions/types';

export default (state = {}, action) =>{
    switch(action.type){
        case CREATE_USER_RESERVATION:
            return {...state, [action.payload.id]: action.payload};
        default: 
            return state;
    }

}
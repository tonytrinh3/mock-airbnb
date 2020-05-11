import _ from 'lodash';

import {
    CREATE_USER_RESERVATION, 
    FETCH_USER_RESERVATIONS
} from '../actions/types';

export default (state = {}, action) =>{
    switch(action.type){
        case FETCH_USER_RESERVATIONS:
            return {...state, ..._.mapKeys(action.payload, "id")};
        case CREATE_USER_RESERVATION:
            return {...state, [action.payload.id]: action.payload};
        default: 
            return state;
    }

}
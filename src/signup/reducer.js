import {
    USER_SIGNUPDATA_REQUEST
    // ,USER_SIGNUPDATA_SUCCESS,USER_SIGNUPDATA_ERROR
} from './types';

const initialState = {
    signupUserData : []
}

export function signupReducer(state = initialState, action = {}) {
    switch(action.type) {
        case USER_SIGNUPDATA_REQUEST:
            let tempArray = initialState.signupUserData;
            tempArray.push(action.payload)
            return {
                ...state,
                signupUserData: tempArray
            };
        // case USER_SIGNUPDATA_SUCCESS:
        //     return {
        //         ...state,
        //     };
        // case USER_SIGNUPDATA_ERROR:
        //     return{
        //         ...state
        //     };
        default:
            return state;
    }
}
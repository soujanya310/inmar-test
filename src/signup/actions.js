import {
    USER_SIGNUPDATA_REQUEST
    // ,USER_SIGNUPDATA_SUCCESS,USER_SIGNUPDATA_ERROR
} from './types';

export function userSignUpDataRequest(req){
    return {
        type: USER_SIGNUPDATA_REQUEST,
        payload: req
    }
}
// export function userSignUpDataSuccess(res){
//     return {
//         type: USER_SIGNUPDATA_SUCCESS,
//         payload: res
//     }
// }
// export function userSignUpDataError(err){
//     return {
//         type: USER_SIGNUPDATA_ERROR,
//         payload: err
//     }
// }
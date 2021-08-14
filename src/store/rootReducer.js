import {combineReducers} from 'redux';
import * as SignUpUsers from '../signup/reducer';
import * as GroupInformation from '../employeeGroups/reducer';

export default combineReducers({
    Signup: SignUpUsers.signupReducer,
    GroupsData: GroupInformation.groupReducer
});
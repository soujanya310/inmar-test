import {
    GROUP_ADD_REQUEST,
    GROUP_DELETE_REQUEST,
    CONTACT_ADD_REQUEST,
    CONTACT_DELETE_REQUEST,
    GROUP_SEARCH_REQUEST,
    CONTACT_SEARCH_REQUEST
} from './types';

const initialState = {
    groupsData : [],
    contactsData: [],
    contactsSearchData:[]
}

export function groupReducer(state = initialState, action = {}) {
    switch(action.type) {
        case GROUP_ADD_REQUEST:
            let tempArray = initialState.groupsData;
            tempArray.push(action.payload)
            return {
                ...state,
                groupsData: tempArray
            };
        case GROUP_DELETE_REQUEST:
            return{
                ...state,
                groupsData: action.payload
            }
        case GROUP_SEARCH_REQUEST:
            let tempArraySearch = [];
            let data = state.groupsData
            for(let i=0; i< data.length; i++){
                if(data[i].groupName.includes(action.payload)){
                    tempArraySearch.push(data[i])
                }
            }
            // const tempArraySearch2 = state.groupsData.filter(data => data.groupName.match(action.payload))
            return{
                ...state,
                groupsData: tempArraySearch
            };
        case CONTACT_ADD_REQUEST:
            let tempArray1 = state.contactsData;
            tempArray1.push(action.payload)
            return {
                ...state,
                contactsData: tempArray1
            };
        case CONTACT_DELETE_REQUEST:
            return{
                ...state,
                contactsData: action.payload
            }
        case CONTACT_SEARCH_REQUEST:
            let tempArraySearchContact = [];
            let contactdata = state.contactsData
            for(let i=0; i< contactdata.length; i++){
                if(contactdata[i].personName.includes(action.payload) || contactdata[i].email.includes(action.payload) ){
                    tempArraySearchContact.push(contactdata[i])
                }
            }
            return{
                ...state,
                contactsData: tempArraySearchContact
            };
        default:
            return state;
    }
}
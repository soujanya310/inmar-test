import {
    GROUP_ADD_REQUEST,
    GROUP_DELETE_REQUEST,
    CONTACT_ADD_REQUEST,
    CONTACT_DELETE_REQUEST,
    GROUP_SEARCH_REQUEST,
    CONTACT_SEARCH_REQUEST
} from './types';

export function groupAddRequest(req){
    return{
        type: GROUP_ADD_REQUEST,
        payload: req
    }
}

export function groupDeleteRequest(req){
    return{
        type: GROUP_DELETE_REQUEST,
        payload: req
    }
}


export function contactAddRequest(req){
    return{
        type: CONTACT_ADD_REQUEST,
        payload: req
    }
}

export function contactDeleteRequest(req){
    return{
        type: CONTACT_DELETE_REQUEST,
        payload: req
    }
}

export function groupSearchRequest(req){
    return{
        type: GROUP_SEARCH_REQUEST,
        payload: req
    }
}

export function contactSearchRequest(req){
    return{
        type: CONTACT_SEARCH_REQUEST,
        payload: req
    }
}
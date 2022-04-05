import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
    errMess: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
        case ActionTypes.ADD_STAFF:
        case ActionTypes.SEARCH_STAFFS:
        case ActionTypes.DELETE_STAFF:
            return {...state, errMess: null, staffs: action.payload}
        case ActionTypes.UPDATE_STAFF:
            state.staffs[action.payload.id] = action.payload;
            return {...state}
        case ActionTypes.STAFFS_FAILED:
        case ActionTypes.STAFF_FAILED:
        case ActionTypes.UPDATE_STAFF_FAILED:
        case ActionTypes.DELETE_FAILED_STAFF:
            return {...state, errMess: action.payload, staffs: []}
        default:
            return state
    }
}
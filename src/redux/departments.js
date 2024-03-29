import * as ActionTypes from './ActionTypes';

export const Departments = (state = {
    errMess: null,
    departments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DEPARTMENTS:
            return {...state, errMess: null, departments: action.payload}
        case ActionTypes.DEPARTMENTS_FAILED:
            return {...state, errMess: action.payload, departments: []}
        default:
            return state
    }
}
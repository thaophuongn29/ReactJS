import * as ActionTypes from './ActionTypes';

export const Salary = (state = {
    errMess: null,
    salary: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFFSSALARY:
            return {...state, errMess: null, salary: action.payload}
        case ActionTypes.STAFFSSALARY_FAILED:
            return {...state, errMess: action.payload, salary: []}
        default:
            return state;
    }
}
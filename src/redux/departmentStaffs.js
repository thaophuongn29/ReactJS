import * as ActionTypes from './ActionTypes';

export const DepartmentStaffs = (state = {
    errMess: null,
    staffs: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DEPARTMENTSTAFFS:
            return {...state, errMess: null, staffs: action.payload}
        case ActionTypes.DEPARTMENTSTAFFS_FAILED:
            return {...state, errMess: action.payload, staffs: []}
        default:
            return state
    }
}
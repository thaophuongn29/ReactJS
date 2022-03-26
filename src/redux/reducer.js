import { STAFFS, DEPARTMENTS } from '../Shared/staffs';

export const InitialState = {
    staffs: STAFFS,
    departments: DEPARTMENTS,
    value: null,
}

export const Reducer = (state=InitialState, action) => {
    return state;
}
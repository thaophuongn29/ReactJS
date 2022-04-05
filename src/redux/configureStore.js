import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Staffs } from './staffs';
import { Departments} from './departments';
import { DepartmentStaffs} from './departmentStaffs';
import { Salary} from './salary'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            salary: Salary,
            departmentStaffs: DepartmentStaffs
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}
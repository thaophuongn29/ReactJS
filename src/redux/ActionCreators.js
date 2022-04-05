import * as ActionTypes from './ActionTypes';

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
})

export const staffFailed = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
})

// POST

// export const postStaff = (staff) => (dispatch) => {
//     const newStaff = staff;

//     return fetch('https://rjs101xbackend.herokuapp.com/staffs', {
//         method: 'POST',
//         body: JSON.stringify(newStaff),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if(response.ok) {
//             return response;
//         } else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response;
//             throw error
//         }
//     },
//     error => {
//         var errMess = new Error(error.message);
//         throw errMess
//     })
//     .then(response => response.json())
//     .then(staffs => dispatch(addStaff(staffs)))
//     .catch(error => dispatch(staffFailed(error.message)))
// }

// PATCH

// export const patchStaff = (id, newField) => (dispatch) => {

//     return fetch('https://rjs101xbackend.herokuapp.com/staffs/' + id, {
//         method: "PATCH",
//         body: JSON.stringify(newField),
//         headers: {
//             "Content-type": "application/json",
//         },
//     })
//     .then(response => {
//         if(response.ok) {
//             return response;
//         } else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response;
//             throw error
//         }
//     },
//     error => {
//         var errMess = new Error(error.message)
//         throw errMess
//     })
//     .then(response => response.json())
//     .then(staffs => dispatch(updateStaff(staffs)))
//     .catch(error => dispatch(updateStaffFailed(error.message)))
// }

// export const updateStaff = (staffs) => ({
//     type: ActionTypes.UPDATE_STAFF,
//     payload: staffs
// })

// export const updateStaffFailed = (errMess) => ({
//     type: ActionTypes.UPDATE_STAFF_FAILED,
//     payload: errMess
// })

// DELETE

// export const deleteStaff = (id) => (dispatch) => {
//     return fetch('https://rjs101xbackend.herokuapp.com/staffs/' + id, {
//         method: "DELETE"
//     })
//     .then(response => {
//         if (response.ok) {
//             return response
//         } else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response;
//             throw error
//         }
//     },
//     error => {
//         var errMess = new Error(error.message)
//         throw errMess
//     })
//     .then(response => response.json())
//     .then(staffs => dispatch(deletedStaff(staffs)))
//     .catch(error => dispatch(deleteFailed(error.message)))
// }

// export const deletedStaff = (staffs) => ({
//     type: ActionTypes.DELETE_STAFF,
//     payload: staffs
// })

// export const deleteFailed = (errMess) => ({
//     type: ActionTypes.DELETE_FAILED_STAFF,
//     payload: errMess
// })

export const searchStaffs = (staffs) => ({
    type: ActionTypes.SEARCH_STAFFS,
    payload: staffs
})

// FETCH STAFFS

export const fetchStaffs = () => (dispatch) => {
    return fetch('https://rjs101xbackend.herokuapp.com/staffs')
    .then(response => {
        if (response.ok) {
            return response
        }else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)))
}

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const fetchDepartments = () => (dispatch) => {
    return fetch('https://rjs101xbackend.herokuapp.com/departments')
    .then(response => {
        if(response.ok) {
            return response
        }else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(departments => dispatch(addDepartments(departments)))
    .catch(error => dispatch(departmentsFailed(error.message)))
}

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

export const fetchDepartmentsStaffs = (id) => (dispatch) => {
    return fetch('https://rjs101xbackend.herokuapp.com/departments/' + id)
    .then(response => {
        if(response.ok) {
            return response
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error
        }
    },
    error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(staffs => dispatch(addDepartmentStaffs(staffs)))
    .catch(error => departmentStaffsFailed(error.message))
}

export const addDepartmentStaffs = (staffs) => ({
    type: ActionTypes.ADD_DEPARTMENTSTAFFS,
    payload: staffs
})

export const departmentStaffsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTSTAFFS_FAILED,
    payload: errmess
})

export const fetchSalary = () => (dispatch) => {
    return fetch('https://rjs101xbackend.herokuapp.com/staffsSalary')
    .then(response => {
        if (response.ok) {
            return response
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {
        var errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(salary => dispatch(addSalary(salary)))
    .catch(error => dispatch(salaryFailed(error.message)))
}

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_STAFFSSALARY,
    payload: salary
})

export const salaryFailed = (errmess) => ({
    type: ActionTypes.STAFFSSALARY_FAILED,
    payload: errmess
})
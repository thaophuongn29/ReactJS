import React from 'react';
import dateFormat from 'dateformat';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Staff(props) {

    return(
        <div className='container'>
            <div className='row mt-4'>
                <Breadcrumb>
                    <Breadcrumb.Item><Link className='text-info' to='/staffs'>Nhân viên</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.staff.name}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='row mt-3 mb-5'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <img style={{width: "100%"}} src={props.staff.image}/>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <h4>{`Họ và tên: ${props.staff.name}`}</h4>
                    <p>{`Ngày sinh: ${dateFormat(props.staff.doB, "dd/mm/yyyy")}`}</p>
                    <p>{`Ngày vào công ty: ${dateFormat(props.staff.startDate, "dd/mm/yyyy")}`}</p>
                    <p>{props.staff.department.name? `Phòng ban: ${props.staff.department.name}` : `Phòng ban: ${props.staff.department}`}</p>
                    <p>{`Số ngày nghỉ còn lại: ${props.staff.annualLeave}`}</p>
                    <p>{`Số ngày đã làm thêm: ${props.staff.overTime}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Staff;
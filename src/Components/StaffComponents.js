import React, {useState} from 'react';
import dateFormat from 'dateformat';
import { Breadcrumb, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm} from 'react-redux-form';
import { FadeTransform } from 'react-animation-components';

function Staff(props) {
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState({})
    const [state, setState] = useState(props.staff.name)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateField = (field) => {
        handleShow()
        setUpdate(field)
    }

    const handleSubmit = (value) => {
        props.patchStaff(props.staff.id, value)   
    }

    const ModalForm = () => {
        switch(update) {
            case 'Họ và tên:':
                return <>
                    <Form.Label htmlFor=''>{update}</Form.Label>
                    <Control.text style={{width: '100%'}} id='' name='name' model='.name' value={state} onChange={(e) => setState(e.target.value)}/>
                </>
            case 'Ngày sinh:':
                return <>
                    <Form.Label htmlFor=''>{update}</Form.Label>
                    <Control style={{width: '100%'}} type='date' id='' name='doB' model='.doB'/>
                </>
            case 'Ngày vào công ty:':
                return <>
                    <Form.Label htmlFor=''>{update}</Form.Label>
                    <Control style={{width: '100%'}} type='date' id='' name='startDate' model='.startDate'/>
                </>
            case 'Phòng ban:':
                return <>
                    <Form.Label htmlFor=''>{update}</Form.Label>
                    <Control.select model='.departmentId' name='departmentId' className="form-control">
                        <option>--Chọn--</option>
                        <option value='Dept01'>Sale</option>
                        <option value='Dept02'>HR</option>
                        <option value='Dept03'>Marketing</option>
                        <option value='Dept04'>IT</option>
                        <option value='Dept05'>Finance</option>
                    </Control.select>
                </>
            case 'Số ngày nghỉ còn lại:':
                return <>
                    <Form.Label htmlFor=''>{update}</Form.Label>
                    <Control style={{width: '100%'}} type='number' id='' name='annualLeave' model='.annualLeave'/>
                </>
            case 'Số ngày đã làm thêm:':
                return <>
                    <Form.Label htmlFor=''>{update}</Form.Label>
                    <Control style={{width: '100%'}} type='number' id='' name='overTime' model='.overTime'/>
                </>
        }
    }

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
                    <FadeTransform in duration={600} transformProps={{
                            exitTransform: 'translateX(-90%)'
                    }}>
                        <img style={{width: "100%"}} src={props.staff.image}/>
                    </FadeTransform>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <FadeTransform in duration={600} transformProps={{
                        exitTransform: 'translateX(90%)'
                    }}>
                        <h4>{`Họ và tên: ${props.staff.name}`} <Button onClick={() => updateField('Họ và tên:')} variant="outline-info" style={{border: 'none'}}><i className="fa fa-edit">&nbsp;Sửa</i></Button></h4>
                        <p>{`Ngày sinh: ${dateFormat(props.staff.doB, "dd/mm/yyyy")}`} <Button onClick={() => updateField('Ngày sinh:')} variant="outline-info" style={{border: 'none'}}><i className="fa fa-edit">&nbsp;Sửa</i></Button></p>
                        <p>{`Ngày vào công ty: ${dateFormat(props.staff.startDate, "dd/mm/yyyy")}`} <Button onClick={() => updateField('Ngày vào công ty:')} variant="outline-info" style={{border: 'none'}}><i className="fa fa-edit">&nbsp; Sửa</i></Button></p>
                        <p>{`Phòng ban: ${props.staff.departmentId}`} <Button onClick={() => updateField('Phòng ban:')} variant="outline-info" style={{border: 'none'}}><i className="fa fa-edit">&nbsp;Sửa</i></Button></p>
                        <p>{`Số ngày nghỉ còn lại: ${props.staff.annualLeave}`} <Button onClick={() => updateField('Số ngày nghỉ còn lại:')} variant="outline-info" style={{border: 'none'}}><i className="fa fa-edit">&nbsp;Sửa</i></Button></p>
                        <p>{`Số ngày đã làm thêm: ${props.staff.overTime}`} <Button onClick={() => updateField('Số ngày đã làm thêm:')} variant="outline-info" style={{border: 'none'}}><i className="fa fa-edit">&nbsp;Sửa</i></Button></p>
                    </FadeTransform>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Chỉnh sửa thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LocalForm onSubmit={(value) => handleSubmit(value)} >
                        {/* <ModalForm></ModalForm> */}
                        {ModalForm()}
                        <div style={{float: 'right'}} className='mt-3'>
                            <Button variant="secondary" onClick={handleClose}>Huỷ</Button>
                            <Button type='submit' variant="primary" onClick={handleClose}>Lưu</Button>
                        </div>
                    </LocalForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Staff;
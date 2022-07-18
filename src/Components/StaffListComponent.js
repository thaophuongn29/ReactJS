import React, {useState} from "react";
import { Card, Button, Form, FormControl, Modal, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function StaffList(props) {
    const [modalOpen, setModalOpen] = useState(false)
    const [state, setState] = useState(props.staffs)

    const handleSubmit = (value) => {
        const salary = parseInt(value.salaryScale * 3000000 + value.overTime*200000, 10)
        const values = {
            ...value, 
            salary: salary,
            doB: new Date(value.doB).toISOString(),
            startDate: new Date(value.startDate).toISOString(),
            image: '/assets/images/alberto.png', 
            // id: props.staffs.length +1,
            }
        props.postStaff(values)
        setModalOpen(!modalOpen)
    }

    var menu = []
    if (props.errMess) {
        menu = <h4>{props.errMess}</h4>
    }
    else {
        menu = state.map((staff) => {
            return(
                <div key={staff.id} className='col-6 col-md-4 col-lg-2' style={{position: 'relative'}}>
                    <Button style={{position: 'inherit', top: '10%',left: '90%', borderRadius: '5px'}} variant="danger" onClick={() => props.deleteStaff(staff.id)}>{'X'}</Button>
                    <Link to={`/staffs/${staff.id}`}>
                        <Button style={{width: "100%"}} variant="outline-dark" className='m-1'>
                            <Card.Img src={staff.image} />
                            <Card.Body>
                                <Card.Text>{staff.name}</Card.Text>
                            </Card.Body>
                        </Button>
                    </Link>
                </div>
                )
            })
    }

    return(
        <div className='container'>
            <div className="row mt-1">
                <div className="col-md-5 mb-3 mb-sm-3 mb-md-0">
                    <h1 className="" style={{display: 'inline'}}>Nhân viên</h1>
                    <Button variant="outline-info" style={{fontSize: '20px'}} className="float-end" onClick={() => setModalOpen(!modalOpen)}>
                        <i className="fa fa-plus"/>
                    </Button>
                </div>
                <Form className="d-flex col-md-7">
                    <FormControl
                        id="input"
                        type="search"
                        placeholder="Tìm kiếm nhân viên"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-info" onClick={() => {
                        const value = document.getElementById('input').value;
                        const staffs = []

                        props.staffs.forEach(staff => {
                            if (staff.name.toLowerCase().includes(value.toLowerCase())) {
                                staffs.push(staff)
                            } 
                        })
                        setState(staffs)

                        document.getElementById('input').value=''}}>Tìm</Button>
                </Form>
            </div>
            <div className='row mt-5 mb-5'>{menu.length==0? `Không tìm thấy nhân viên`: menu}</div>
            
            <Modal show={modalOpen} onHide={() => setModalOpen(!modalOpen)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LocalForm onSubmit={(value) => handleSubmit(value)}>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="name" column md={4}>Tên</Form.Label>
                            <Col md={8}>
                                <Control.text
                                            model = '.name'
                                            className="form-control"
                                            id="name" 
                                            name='name'
                                            validators={{required, maxLength: maxLength(30), minLength: minLength(3)}}
                                            />
                                <Errors 
                                            className="text-danger" 
                                            model='.name' 
                                            show='touched'
                                            messages={{
                                                required: 'Yeu cau nhap',
                                                minLength: 'Yeu cau nhieu hon 2 ki tu',
                                                maxLength: 'Yeu cau it hon 30 ki tu'
                                            }} />
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>Ngày sinh</Form.Label>
                            <Col md={8}>
                                <Control 
                                            type='date' 
                                            model= '.doB'
                                            className="form-control"
                                            name='doB' 
                                            validators={{required}}
                                            />
                                <Errors 
                                            className="text-danger" 
                                            model='.doB' 
                                            show='touched'
                                            messages={{
                                                required: 'Yeu cau nhap',
                                            }} />
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>Ngày vào công ty</Form.Label>
                            <Col md={8}>
                                <Control 
                                            type='date' 
                                            model= '.startDate'
                                            className="form-control"
                                            name='startDate' 
                                            validators={{required}}
                                            />
                                <Errors 
                                            className="text-danger" 
                                            model='.startDate' 
                                            show='touched'
                                            messages={{
                                                required: 'Yeu cau nhap',
                                            }} />
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>Phòng ban</Form.Label>
                            <Col md={8}>
                                <Control.select model='.departmentId' name='departmentId' className="form-control">
                                    <option>--Chọn--</option>
                                    <option value='Dept01'>Sale</option>
                                    <option value='Dept02'>HR</option>
                                    <option value='Dept03'>Marketing</option>
                                    <option value='Dept04'>IT</option>
                                    <option value='Dept05'>Finance</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>Hệ số lương</Form.Label>
                            <Col md={8}>
                                <Control 
                                            type="number" 
                                            model='.salaryScale'
                                            className="form-control"
                                            name='salaryScale' 
                                            placeholder="1"
                                            />
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>Số ngày nghỉ còn lại</Form.Label>
                            <Col md={8}>
                                <Control 
                                            type="number" 
                                            model='.annualLeave'
                                            className="form-control"
                                            name='annualLeave'
                                            placeholder="0"
                                            />
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>Số ngày đã làm thêm</Form.Label>
                            <Col md={8}>
                                <Control 
                                            type="number" 
                                            model='.overTime'
                                            className="form-control"
                                            name='overTime' 
                                            placeholder="0"
                                            />
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button variant="info" type="submit" className='mt-3'>Thêm</Button>
                        </div>
                    </LocalForm>
                </Modal.Body>
            </Modal>
                
        </div>
    )

}

export default StaffList;
import React, {useState} from "react";
import { Card, Button, Form, FormControl, Modal, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function StaffList(props) {

    const [modalOpen, setModalOpen] = useState(false)

    const handleSubmit = (value) => {
        const values = {...value, image: '/assets/images/alberto.png', id: props.staffs.length}
        const add = [...props.staffs, values]
        props.onSubmit(add)
        setModalOpen(!modalOpen)
    }

    var menu = []
    if (props.value) {
        menu = props.staffs.map((staff) => {
            return(
                staff.name.toLowerCase().includes(props.value.toLowerCase()) && <div key={staff.id} className='col-6 col-md-4 col-lg-2'>
                    <Link to={`/staffs/${staff.id}`}>
                        <Button style={{width: "100%"}} variant="outline-dark" className='m-1'>
                            <Card.Img src={staff.image} />
                            <Card.Body>
                                <Card.Text><mark>{staff.name}</mark></Card.Text>
                            </Card.Body>
                        </Button>
                    </Link>
                </div>
                )
            })
    }
    else if (props.value===null) {
        menu = props.staffs.map((staff) => {
            return(
                <div key={staff.id} className='col-6 col-md-4 col-lg-2'>
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
    
    var sum = 0
    menu.forEach(menu => menu===undefined? sum ++ : null)

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
                    <Button variant="outline-info" onClick={() => {props.onClick(document.getElementById('input').value); document.getElementById('input').value=''}}>Tìm</Button>
                </Form>
            </div>
            <div className='row mt-5 mb-5'>{sum===props.staffs.length? `Không tìm thấy nhân viên: ${props.value}`: menu}</div>
            <Modal show={modalOpen} onHide={() => setModalOpen(!modalOpen)}>
                <Modal.Header closeButton>
                    <Modal.Title>Them nhan vien</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LocalForm onSubmit={(value) => handleSubmit(value)}>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="name" column md={4}>Ten</Form.Label>
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
                            <Form.Label htmlFor="" column md={4}>Ngay sinh</Form.Label>
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
                            <Form.Label htmlFor="" column md={4}>Ngay vao cong ty</Form.Label>
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
                            <Form.Label htmlFor="" column md={4}>Phong ban</Form.Label>
                            <Col md={8}>
                                <Control.select model='.department' name='department' className="form-control">
                                    <option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group mt-3'>
                            <Form.Label htmlFor="" column md={4}>He so luong</Form.Label>
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
                            <Form.Label htmlFor="" column md={4}>So ngay nghi con lai</Form.Label>
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
                            <Form.Label htmlFor="" column md={4}>So ngay da lam them</Form.Label>
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
                            <Button variant="info" type="submit" className='mt-3'>Them</Button>
                        </div>
                    </LocalForm>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default StaffList;
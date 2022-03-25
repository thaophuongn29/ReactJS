import React, {useState} from "react";
import { Card, Button, Form, FormControl, Modal, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function StaffList(props) {

    const [modalOpen, setModalOpen] = useState(false)
    const [state, setState] = useState({
        id: props.staffs.length,
        name: '',
        doB: '',
        startDate: '',
        department: 'Sale',
        salaryScale: 1,
        annualLeave: 0,
        overTime: 0,
        image: '/assets/images/alberto.png',
        touched: {
            name: false,
            doB: false,
            startDate: false
        }
    })

    const handleSubmit = (e) => {
        const add = [...props.staffs, state]
        props.onSubmit(add)
        setModalOpen(!modalOpen)
        e.preventDefault()
    }

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        setState((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const handleBlur = (field) => (evt) => {
        setState((pre) => {
            return {
                ...pre,
                touched: {
                    ...state.touched,
                    [field]: true
                }
            }
        })
    }

    const validate = (name, doB, startDate) => {
        const errors = {
            name: '',
            doB: '',
            startDate: ''
        }

        if (state.touched.name && name.length < 1) {
            errors.name= 'Yeu cau nhap'
        }
        else if (state.touched.name && name.length > 30) {
            errors.name= 'Yeu cau it hon 30 ki tu'
        }else if (state.touched.name && name.length < 3) {
            errors.name= 'Yeu cau nhieu hon 2 ki tu'
        }

        if (state.touched.doB && doB === '')
        errors.doB = 'Yeu cau nhap'
        
        if (state.touched.startDate && startDate === '')
        errors.startDate = 'Yeu cau nhap'
        
        return errors
    }

    const errors = validate(state.name, state.doB, state.startDate)

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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="name" column md={4}>Ten</Form.Label>
                            <Col md={8}>
                                <Form.Control 
                                            type="type"
                                            id="name" 
                                            name='name'
                                            value={state.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur('name')}
                                            isInvalid={errors.name !== ''}
                                            required
                                            />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="" column md={4}>Ngay sinh</Form.Label>
                            <Col md={8}>
                                <Form.Control 
                                            type='date' 
                                            name='doB' 
                                            value={state.doB}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur('doB')}
                                            isInvalid={errors.doB !== ''}
                                            required
                                            />
                                <Form.Control.Feedback type="invalid">{errors.doB}</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="" column md={4}>Ngay vao cong ty</Form.Label>
                            <Col md={8}>
                                <Form.Control 
                                            type='date' 
                                            name='startDate' 
                                            value={state.startDate} 
                                            onChange={handleInputChange} 
                                            onBlur={handleBlur('startDate')}
                                            isInvalid={errors.startDate !== ''}
                                            required
                                            />
                                <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="" column md={4}>Phong ban</Form.Label>
                            <Col md={8}>
                                <Form.Select name='department' value={state.department} onChange={handleInputChange}>
                                    <option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="" column md={4}>He so luong</Form.Label>
                            <Col md={8}>
                                <Form.Control 
                                            type="number" 
                                            name='salaryScale' 
                                            value={state.salaryScale} 
                                            onChange={handleInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="" column md={4}>So ngay nghi con lai</Form.Label>
                            <Col md={8}>
                                <Form.Control 
                                            type="number" 
                                            name='annualLeave'
                                            value={state.annualLeave} 
                                            onChange={handleInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mt-3'>
                            <Form.Label htmlFor="" column md={4}>So ngay da lam them</Form.Label>
                            <Col md={8}>
                                <Form.Control 
                                            type="number" 
                                            name='overTime' 
                                            value={state.overTime} 
                                            onChange={handleInputChange}/>
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="info" type="submit" className='mt-3'>Them</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default StaffList;
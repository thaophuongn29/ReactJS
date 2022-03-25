import {useState} from 'react';
import { Breadcrumb, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Salary(props) {
    const [state, setState] = useState(props.staffs.map(staff => {
            return {...staff, sum: parseInt(staff.salaryScale * 3000000 + staff.overTime*200000, 10)}}))
    let newState = []
    
    function Sort (num) {
        if (num === 1) {
            newState = [...state]
            setState(newState.sort((a,b) => (a.sum - b.sum)))
        }
        else if (num === 2) {
            newState = [...state]
            setState(newState.sort((a,b) => (b.sum - a.sum)))
        }
        else if (num === 3) {
            newState = [...state]
            setState(newState.sort((a,b) => (a.id - b.id)))
        }
    }

    const menu = state.map((staff) => {
        return(
            <div key={staff.id} className='col-12 col-md-6 col-lg-4 mt-3 mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>{staff.name}</Card.Title>
                        <Card.Text>{`Mã nhân viên: ${staff.id}`}</Card.Text>
                        <Card.Text>{`Hệ số lương: ${staff.salaryScale}`}</Card.Text>
                        <Card.Text>{`Số giờ làm thêm: ${staff.overTime}`}</Card.Text>
                        <Link to={`../staffs/${staff.id}`}>
                            <Button variant="dark" style={{width: "100%"}}>{`Lương: ${staff.sum}`}</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        )
    })

    return(
        <div className='container'>
            <div className='row mt-4'>
                <Breadcrumb className='col-12 col-md-6'>
                    <Breadcrumb.Item><Link className='text-info' to='/staffs'>Nhân viên</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Bảng lương</Breadcrumb.Item>
                </Breadcrumb>
                    <div className='col-12 col-md-6'>
                        <div className='float-end'>
                        <span className=''>Sắp xếp lương:</span>
                        <Button id="1" className='' variant="warning" onClick={() => Sort(1)}><i class="fa fa-sort-up"></i></Button>
                        <Button id="2" className='' variant="danger" onClick={() => Sort(2)}><i class="fa fa-sort-down"></i></Button> 
                        <Button id="3" className='' variant="info" onClick={() => Sort(3)}><i class="fa fa-sort"></i></Button>
                        </div>
                    </div>
            </div>
            <div className='row'>{menu}</div>
        </div>
    )
}

export default Salary;
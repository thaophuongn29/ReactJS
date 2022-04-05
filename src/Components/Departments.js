import React from 'react';
import { Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';

function Department(props) {

    const menu = props.departments.map((dep, i) => {
        return(
            <div className='col-12 col-md-6 col-lg-4' key={i}>
                    <Card className='m-1 mt-4'>
                        <Card.Body>
                            <Card.Title>{dep.name}</Card.Title>
                            <Link className='text-info' onClick={() => props.fetchDepartmentsStaffs(dep.id)} to={`/department/${dep.id}`} >
                                <Card.Text >{`Số lượng nhân viên: ${dep.numberOfStaff}`}</Card.Text>
                            </Link>
                        </Card.Body>
                    </Card>
            </div>
        )
    })

    return(
        <div className='container'>
            <div className='row mb-4'>
                {menu}
            </div>
        </div>
    )
}

export default Department;
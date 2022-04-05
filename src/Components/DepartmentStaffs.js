import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DepartmentStaffs ({departmentStaffs}) {
    var menu = departmentStaffs.staffs.map((staff) => {
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
    return(
        <div className='container'>
            <div className='row mt-5 mb-5'>{menu}</div>

        </div>
    )
}

export default DepartmentStaffs;
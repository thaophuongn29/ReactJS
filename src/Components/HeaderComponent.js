import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom'

function Header() {
    return(
         <Navbar className='navbar-dark' expand='md' bg="dark" variant="dark">
            <div className='container'>
                <Navbar.Brand href="/">
                    <img src='assets/images/logo.png' alt='logo' height='30' width='41'/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav >
                        <NavLink className="nav-link" to='/staffs'>
                            <span className='fa fa-user fa-lg'></span> Nhân viên
                        </NavLink>
                        <NavLink className="nav-link" to='/department'>
                            <span className='fa fa-building fa-lg'></span> Phòng ban
                        </NavLink>
                        <NavLink className="nav-link" to='/salary'>
                            <span className='fa fa-money fa-lg'></span> Lương
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                
                {/* <DropdownButton className='d-none d-md-block' variant="info" id="dropdown-basic-button" title="Chế độ hiển thị">
                    <Dropdown.Item onClick={() => this.btn(this.state.staffInfo, 2)}>2 cột</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.btn(this.state.staffInfo, 3)}>3 cột</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.btn(this.state.staffInfo, 6)}>6 cột</Dropdown.Item>
                </DropdownButton> */}
            </div>
        </Navbar>
    )
}

export default Header;
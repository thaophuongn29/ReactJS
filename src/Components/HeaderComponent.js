import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom'

function Header() {
    return(
         <Navbar className='navbar-dark' expand='md' bg="dark" variant="dark">
            <div className='container'>
                <Navbar.Brand href="/">
                    <img src='../assets/images/logo.png' alt='logo' height='30' width='41'/>
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
            </div>
        </Navbar>
    )
}

export default Header;
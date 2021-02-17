import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () =>{
     dispatch(logout())
    }

    return (
        <div>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <LinkContainer to='/'>
                <Navbar.Brand>DASHBOARD</Navbar.Brand>
                </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        { userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : ( <LinkContainer to='/login'>
                        <Nav.Link>
                            <i className='fas fa-user'></i>Sign In
                        </Nav.Link>
                        </LinkContainer> )}
                        {userInfo && userInfo.isAdmin &&(
                            <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        )}
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header

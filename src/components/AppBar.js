import React from 'react'
import '../css/appbar.css'
import { Navbar, Container, Form, Nav, NavDropdown } from 'react-bootstrap'

const AppBar = () => {
    return (
        <Navbar className='appbar'>
            <Container fluid>
                <Navbar.Brand className='appbar-brand' href="/">Movie Tracker</Navbar.Brand>
                <Form className="d-flex w-25">
                    <Form.Control
                        type="search"
                        placeholder="Search movie"
                        className="me-2 appbar-search shadow-none"
                        aria-label="Search"
                    />
                </Form>
                <Nav className='justify-content-end appbar-nav'>
                    <NavDropdown
                        title="Account"
                        align='end'
                    >
                        <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            MyList
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default AppBar
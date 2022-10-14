import React from 'react'
import '../css/apptabs.css'
import { Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom'

import { genres } from '../data/data'

const AppTabs = () => {
    return (
        <>
            <Nav
                variant="tabs"
                className='apptabs'>
                <LinkContainer to='/movies'>
                    <Nav.Link className='tab-link' href="/movies">MOVIES</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/tvshows'>
                    <Nav.Link className='tab-link' href="/tvshows">TV SHOWS</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to='/genre'>
                    <Nav.Link className='tab-link' href="/genre">
                        GENRE
                    </Nav.Link>
                </LinkContainer> */}
                <NavDropdown title="GENRE" id="nav-dropdown" className='tab-link'>
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                {/* <LinkContainer to='/country'>
                    <Nav.Link className='tab-link' href="/country">
                        COUNTRY
                    </Nav.Link>
                </LinkContainer> */}
                <NavDropdown title="COUNTRY" id="nav-dropdown" className='tab-link'>
                    {/* <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
                    <Row className='ps-3' md={4}>
                        {
                            genres.map((genre) => (
                                <Col>
                                    <NavDropdown.Item eventKey="4.2">{genre}</NavDropdown.Item>
                                </Col>
                            ))
                        }
                    </Row>
                </NavDropdown>
            </Nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppTabs
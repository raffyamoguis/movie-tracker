import React from 'react'
import '../css/apptabs.css'
import { Nav } from 'react-bootstrap'

const AppTabs = () => {
    return (
        <Nav
            variant="tabs"
            defaultActiveKey="/movies"
            className='apptabs'>
            <Nav.Item className='tab-item'>
                <Nav.Link className='tab-link' href="/movies">MOVIES</Nav.Link>
            </Nav.Item>
            <Nav.Item className='tab-item'>
                <Nav.Link className='tab-link' eventKey="link-1">TV SHOWS</Nav.Link>
            </Nav.Item>
            <Nav.Item className='tab-item'>
                <Nav.Link className='tab-link' eventKey="disabled">
                    ANIMATION
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className='tab-item'>
                <Nav.Link className='tab-link' eventKey="cartoons">
                    CARTOONS
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default AppTabs
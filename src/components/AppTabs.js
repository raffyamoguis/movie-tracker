import React from 'react'
import '../css/apptabs.css'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const AppTabs = () => {
    return (
        <Nav
            variant="tabs"
            defaultActiveKey="/movies"
            className='apptabs'>
            <LinkContainer to='/movies'>
                <Nav.Item className='tab-item'>
                    <Nav.Link className='tab-link' href="/movies">MOVIES</Nav.Link>
                </Nav.Item>
            </LinkContainer>
            <LinkContainer to='/tvshows'>
                <Nav.Item className='tab-item'>
                    <Nav.Link className='tab-link' href="/tvshows">TV SHOWS</Nav.Link>
                </Nav.Item>
            </LinkContainer>
            <LinkContainer to='/animation'>
                <Nav.Item className='tab-item'>
                    <Nav.Link className='tab-link' href="/animation">
                        ANIMATION
                    </Nav.Link>
                </Nav.Item>
            </LinkContainer>
            <LinkContainer to='/cartoons'>
                <Nav.Item className='tab-item'>
                    <Nav.Link className='tab-link' href="/cartoons">
                        CARTOONS
                    </Nav.Link>
                </Nav.Item>
            </LinkContainer>
        </Nav>
    )
}

export default AppTabs
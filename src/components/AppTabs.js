import React from 'react'
import '../css/apptabs.css'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom'

const AppTabs = () => {
    return (
        <>
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
                <LinkContainer to='/genre'>
                    <Nav.Item className='tab-item'>
                        <Nav.Link className='tab-link' href="/genre">
                            GENRE
                        </Nav.Link>
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to='/country'>
                    <Nav.Item className='tab-item'>
                        <Nav.Link className='tab-link' href="/country">
                            COUNTRY
                        </Nav.Link>
                    </Nav.Item>
                </LinkContainer>
            </Nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppTabs
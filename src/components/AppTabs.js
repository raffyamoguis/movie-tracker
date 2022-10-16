import React, { useState, useEffect } from 'react'
import '../css/apptabs.css'
import { Nav, NavDropdown, Row, Col, Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom'
import axios from 'axios';

import { genres } from '../data/data'

const getDropwdownApiURL = 'https://myflixer-video-api.cyclic.app/genres';

const AppTabs = () => {
    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                axios.get(`${getDropwdownApiURL}?type=2`)
                    .then(function (response) {
                        setGenres(response.data);
                    });
            } catch (error) {
                console.log(error)
            }

            try {
                axios.get(`${getDropwdownApiURL}?type=3`)
                    .then(function (response) {
                        setCountries(response.data);
                    });
            } catch (error) {
                console.log(error)
            }
        }

        fetch();
    }, []);

    const fetchData = (apiurl) => {

    }

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
                <NavDropdown title="GENRE" id="nav-dropdown-menu" className='tab-link'>
                    <Row className='ps-3' md={4}>
                        {
                            genres.map((genre) => (
                                <Col>
                                    <NavDropdown.Item eventKey="4.2">{genre.name}</NavDropdown.Item>
                                </Col>
                            ))
                        }
                    </Row>
                </NavDropdown>
                {/* <LinkContainer to='/country'>
                    <Nav.Link className='tab-link' href="/country">
                        COUNTRY
                    </Nav.Link>
                </LinkContainer> */}
                <NavDropdown title="COUNTRY" id="nav-dropdown-menu" className='tab-link'>
                    {/* <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
                    <Row className='ps-3' md={4}>
                        {
                            countries.map((country) => (
                                <Col>
                                    <NavDropdown.Item eventKey="4.2">{country.name}</NavDropdown.Item>
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
import React, { useState, useEffect } from 'react'
import '../css/apptabs.css'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom'
import axios from 'axios';

const getDropwdownApiURL = 'https://myflixer-video-api.cyclic.app/genres';

const AppTabs = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetch = async () => {

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
                <LinkContainer to='/genre'>
                    <Nav.Link className='tab-link' href="/genre">
                        GENRE
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/country'>
                    <Nav.Link className='tab-link' href="/country">
                        COUNTRY
                    </Nav.Link>
                </LinkContainer>
            </Nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppTabs
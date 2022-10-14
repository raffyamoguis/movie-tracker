import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Headline from '../components/Headline'
import AppTabs from '../components/AppTabs'
import MovieContent from './MovieContent'
import TvShowContent from './TvShowContent'
import HomeLayout from './HomeLayout'
import GenreContent from './GenreContent'

import { Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <Headline text='Explore What You Like' />
                    <AppTabs />
                    <Routes>
                        <Route element={<HomeLayout />}>
                            <Route path="/" element={<MovieContent />} />
                            <Route path="/movies" element={<MovieContent />} />
                            <Route path="/tvshows" element={<TvShowContent />} />
                            <Route path="/genre" element={<GenreContent />} />
                            <Route path="/country" element />
                        </Route>
                    </Routes>
                </Col>
                <Col md={4}>
                    <Headline text='Upcoming Movies' />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams, useSearchParams } from "react-router-dom";
import axios from 'axios';

import Headline from '../components/Headline'
import Tags from '../components/Tags'

const MOVIE = 'Movie';
const TV = 'TV';

const getMovieDataApiURL = 'https://myflixer-video-api.cyclic.app/movie/';

const Movie = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const [moviedata, setMovieData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (searchParams.get('type') === MOVIE) {
                //fetch movie data
                fetchMoviesData(getMovieDataApiURL + params.name);
            }
            if (searchParams.get('type') === TV) {
                //fetch tv data

            }
        }

        fetchData();
    }, []);

    const fetchMoviesData = (apiurl) => {
        try {
            axios.get(apiurl)
                .then(function (response) {
                    setMovieData(response.data);
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Headline text={moviedata.name} />
            <Row className='mt-4'>
                <Col md={2}>
                    <Image
                        src={moviedata.poster}
                        rounded
                        className='w-100'
                    />
                </Col>
                <Col md={10}>
                    <div>
                        <Tags text='Sci-fi' />
                        <Tags text='Horror' />
                        <p className='w-75 mt-4'>{moviedata.plot}</p>
                        <div><b>Release: </b>{moviedata.released}</div>
                        <div><b>Duration: </b>{moviedata.duration}</div>
                        <div><b>Production: </b>{moviedata.production}</div>
                        <div><b>Cast: </b>{moviedata.casts}</div>
                        <div><b>Country: </b>{moviedata.country}</div>
                    </div>
                </Col>
            </Row>
            <Headline text='Sources' />
        </Container>
    )
}

export default Movie
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams, useSearchParams } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios';

import Headline from '../components/Headline'
import Tags from '../components/Tags'
import AppButton from '../components/AppButton';

import { addToList } from '../styles/styles';

const MOVIE = 'Movie';
const TV = 'TV';

const getMovieDataApiURL = 'https://myflixer-video-api.cyclic.app/movie/';

const Movie = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const [moviedata, setMovieData] = useState([]);
    const [genres, setGenre] = useState([]);
    const [isDataFetch, setDataFetch] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        ref.current.continuousStart();
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
        console.log('useEffect is running.')
    }, []);

    const fetchMoviesData = (apiurl) => {
        try {
            axios.get(apiurl)
                .then(function (response) {
                    setMovieData(response.data);
                    setGenre(response.data.genre.split(','));
                    ref.current.complete();
                    setDataFetch(true);
                });
        } catch (error) {
            console.log(error)
        }
    }

    const addToWatchList = () => {
        console.log('Add Movie To Watch List')
    }

    return (
        <>
            <LoadingBar color="#faae2c" ref={ref} shadow={true} height={3} />
            {isDataFetch &&
                <Container>
                    <div>
                        <AppButton
                            message='Add to Watch List'
                            buttonStyle={addToList}
                            onClick={addToWatchList}
                            roundedPill={true}
                        />
                        <Headline text={moviedata.name} />
                    </div>
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
                                {genres.map((genre) => (
                                    <Tags text={genre} />
                                ))}
                                <p className='w-75 mt-4'>{moviedata.plot}</p>

                                <div><b>Release: </b>{moviedata.released}</div>
                                <div><b>Duration: </b>{moviedata.duration}</div>
                                <div><b>Production: </b>{moviedata.production}</div>
                                <div><b>Cast: </b>{moviedata.casts}</div>
                                <div><b>Country: </b>{moviedata.country}</div>
                                <Tags text={moviedata.imdb} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            }
        </>
    )
}

export default Movie
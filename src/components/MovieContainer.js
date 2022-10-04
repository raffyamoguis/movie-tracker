import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import MovieBox from './MovieBox'
import axios from 'axios';

const MOVIETYPE = [
    "TRENDING",
    "LATESTMOVIES",
    "LATESTTVSHOW",
    "COMINGSOON"
]

const TrendingMoviesApiURL = 'https://myflixer-video-api.cyclic.app/trending-movies';
const LatestMoviesApiURL = 'https://myflixer-video-api.cyclic.app/latest-movies';
const LatestTvShowApiURL = 'https://myflixer-video-api.cyclic.app/latest-tv';

const MovieContainer = ({ title, movietype }) => {
    const [moviesdata, setMoviesData] = React.useState([]);
    const [tempMovie, setTempMovie] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            if (movietype.toUpperCase() === MOVIETYPE[0]) {
                fetchMoviesData(TrendingMoviesApiURL);
            } else if (movietype.toUpperCase() === MOVIETYPE[1]) {
                fetchMoviesData(LatestMoviesApiURL);
            } else if (movietype.toUpperCase() === MOVIETYPE[2]) {
                fetchMoviesData(LatestTvShowApiURL);
            }
        }

        fetchData();
    }, [movietype]);

    const fetchMoviesData = (apiurl) => {
        try {
            axios.get(apiurl)
                .then(function (response) {
                    // setMoviesData(response.data);
                    trimMovies(response.data);
                });
        } catch (error) {
            console.log(error)
        }
    }

    const trimMovies = (arrr) => {
        setTempMovie(arrr);
        let tempData = arrr;
        setMoviesData(tempData.slice(0, 16));
    }

    const handleclick = () => {
        setMoviesData(tempMovie);
    }

    return (
        <>
            <h4 className='mt-4'>{title}</h4>
            <Row md={8} className='g-0'>
                {moviesdata.map((moviedata) => {
                    return (
                        <Col className='mt-2'>
                            <MovieBox
                                title={moviedata.name}
                                banner={moviedata.poster}
                                year={moviedata.year}
                                duration={moviedata.duration}
                                type={moviedata.type}
                            />
                        </Col>
                    )
                })}
            </Row>
            <Button onClick={handleclick}>Show More</Button>
        </>
    )
}

export default MovieContainer
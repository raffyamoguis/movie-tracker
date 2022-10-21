import React, { useEffect, useState, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import MovieBox from '../components/MovieBox';
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios';

const getDropwdownApiURL = 'https://myflixer-video-api.cyclic.app/genres?type=2';
const getMovieGenreApiURL = 'https://myflixer-video-api.cyclic.app/genre/';

const GenreContent = () => {
    const [genres, setGenres] = useState([]);
    const [genrecontent, setGenreContent] = useState([]);
    const [selgenre, setSelGenre] = useState({
        name: 'Action',
        src: 'action'
    });
    const [isComplete, setComplete] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        try {
            axios.get(getDropwdownApiURL)
                .then(function (response) {
                    setGenres(response.data);
                });
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        ref.current.continuousStart();
        const fetchSelGenre = async () => {
            try {
                axios.get(`${getMovieGenreApiURL + selgenre.src}`)
                    .then((response) => {
                        setGenreContent(response.data.data)
                        ref.current.complete();
                        setComplete(true);
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchSelGenre();
    }, [selgenre.src])

    const onGenreClick = genre => {
        setSelGenre(genre)
    }

    return (
        <>
            <LoadingBar color="#faae2c" ref={ref} shadow={true} height={3} />
            {isComplete && <div className='ms-3'>
                <div style={{ display: 'inline-block' }}>
                    {
                        genres.map((genre) => (
                            <a
                                className='btn btn-sm btn-light mt-1 me-1'
                                onClick={e => onGenreClick(genre)}
                                href
                            >
                                {genre.name}
                            </a>
                        ))
                    }
                </div>

                <div>
                    <h3 className='mt-4' style={{ textTransform: 'capitalize' }}>{selgenre.name}</h3>
                    <Row md={8} className='g-0'>
                        {genrecontent.map((moviedata) => {
                            return (
                                <Col className='mt-2'>
                                    <MovieBox
                                        title={moviedata.name}
                                        banner={moviedata.poster}
                                        year={moviedata.year}
                                        duration={moviedata.duration}
                                        type={moviedata.type}
                                        link={moviedata.link}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div >
            }
        </>
    )
}

export default GenreContent
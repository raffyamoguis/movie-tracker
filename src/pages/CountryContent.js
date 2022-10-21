import React, { useEffect, useState, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import MovieBox from '../components/MovieBox';
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios';

const getDropwdownApiURL = 'https://myflixer-video-api.cyclic.app/genres?type=3';
const getMovieCountryApiURL = 'https://myflixer-video-api.cyclic.app/country/';

const CountryContent = () => {
    const [countries, setCountries] = useState([]);
    const [countrycontent, setCountryContent] = useState([]);
    // const [selcountry, setSelCountry] = useState('AR');
    const [selcountry, setSelCountry] = useState({
        name: 'Argentina',
        src: 'AR'
    })
    const [isComplete, setComplete] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                axios.get(getDropwdownApiURL)
                    .then(function (response) {
                        setCountries(response.data);
                    });
            } catch (error) {
                console.log(error)
            }
        }
        fetchCountry();
    }, []);

    useEffect(() => {
        ref.current.continuousStart();
        const fetchSelCountry = async () => {
            try {
                axios.get(`${getMovieCountryApiURL + selcountry.src}`)
                    .then((response) => {
                        setCountryContent(response.data.data)
                        ref.current.complete();
                        setComplete(true);
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchSelCountry();
    }, [selcountry.src])

    const onCountryClick = (country) => {
        setSelCountry(country)
    }

    return (
        <>
            <LoadingBar color="#faae2c" ref={ref} shadow={true} height={3} />
            {isComplete && <div className='ms-3'>
                <div style={{ display: 'inline-block' }}>
                    {
                        countries.map((country) => (
                            <a
                                className='btn btn-sm btn-light mt-1 me-1'
                                onClick={e => onCountryClick(country)}
                                href
                            >
                                {country.name}
                            </a>
                        ))
                    }
                </div>

                <div>
                    <h3 className='mt-4' style={{ textTransform: 'capitalize' }}>{selcountry.name}</h3>
                    <Row md={8} className='g-0'>
                        {countrycontent.map((moviedata) => {
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

export default CountryContent
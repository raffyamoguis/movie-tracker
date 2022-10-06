import React, { useState, useEffect } from 'react'
import '../css/moviebox.css'
import error from '../img/error-img.jpg'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'

const MovieBox = ({ title, banner, year, duration, type }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function loadImage() {
            var img = new Image();
            img.src = banner;
            img.onload = function () {
                setReady(true);
            }
        }
        loadImage();
    }, []);

    return (
        <Card className='moviebox border-none' style={{ width: '9rem' }}>
            <Card.Img
                className='resize'
                variant="top"
                src={ready ? banner : error}
            />
            <Card.Body>
                <OverlayTrigger overlay={<Tooltip id="tooltip">{title}</Tooltip>}>
                    <h6 className='moviebox-title'><b>{title.substring(0, 16)}</b></h6>
                </OverlayTrigger>
                <div className='movie-info'>
                    <div>{year}</div>
                    <div>{duration}</div>
                    <div>{type}</div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MovieBox
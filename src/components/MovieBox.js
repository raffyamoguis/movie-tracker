import React from 'react'
import '../css/moviebox.css'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'

const MovieBox = ({ title, banner, year, duration, type }) => {
    return (
        <Card className='moviebox border-none' style={{ width: '9rem' }}>
            <Card.Img
                className='resize'
                variant="top"
                src={banner}
            />
            <Card.Body>
                <OverlayTrigger overlay={<Tooltip id="tooltip">{title}</Tooltip>}>
                    <h6 className='moviebox-title'><b>{title.substring(0, 17)}</b></h6>
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
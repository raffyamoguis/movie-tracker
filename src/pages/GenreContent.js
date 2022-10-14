import React from 'react'
import { ListGroup, Button, Form } from 'react-bootstrap';
import { genres } from '../data/data'

const GenreContent = () => {
    return (
        <div className='ms-3'>
            <Form.Select aria-label="Select Genre" className='w-25 m-2'>
                <option>Open this select menu</option>
                {
                    genres.map((genre) => (
                        <option value={genre}>{genre}</option>
                    ))
                }
            </Form.Select>
        </div>
    )
}

export default GenreContent
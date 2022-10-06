import React from 'react'
import { Button } from 'react-bootstrap';

const buttonStyle = {
    backgroundColor: '#f2f7f5',
    border: '1px solid #faae2c',
    color: '#faae2c',
}

const AppButton = ({ message, onClick }) => {
    return (
        <Button
            className='shadow-none mt-4'
            style={buttonStyle}
            onClick={(e) => onClick()}
        >
            {message}
        </Button>
    )
}

export default AppButton
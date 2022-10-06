import React from 'react'
import { Badge } from 'react-bootstrap'

const styleTags = {
    backgroundColor: '#f2f7f5',
    border: '1px solid #00473e',
    marginRight: '.5em',
}

const Tags = ({ text }) => {
    return (
        <Badge
            bg="light"
            text="dark"
            className='mr-1'
            style={styleTags}
        >
            {text}
        </Badge>
    )
}

export default Tags
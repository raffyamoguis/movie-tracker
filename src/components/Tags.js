import React from 'react'
import { Badge } from 'react-bootstrap'


const Tags = ({ text, warning }) => {
    return (
        <Badge
            style={{ marginRight: "5px" }}
            bg={`${warning ? 'warning' : 'dark'}`}
            text={`${warning ? 'dark' : 'white'}`}
        >
            {text}
        </Badge>
    )
}

export default Tags
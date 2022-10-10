import React from 'react'
import { Badge } from 'react-bootstrap'


const Tags = ({ text }) => {
    return (
        <Badge style={{ marginRight: "5px" }} bg="warning" text="dark">{text}</Badge>
    )
}

export default Tags
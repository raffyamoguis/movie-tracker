import React from 'react'
import { useParams } from "react-router-dom";

const Movie = () => {
    let params = useParams();
    return (
        <div>{params.name}</div>
    )
}

export default Movie
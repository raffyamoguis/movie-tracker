import React from 'react'
import MovieContainer from '../components/MovieContainer'

const MovieContent = () => {
    return (
        <>
            <div className='ms-3'>
                <MovieContainer title='Trending Movies' movietype='TRENDING' />
            </div>
        </>
    )
}

export default MovieContent
import React from 'react'
import MovieContainer from '../components/MovieContainer'

const MovieContent = () => {
    return (
        <div className='ms-3' >
            <MovieContainer title='Trending Movies' movietype='TRENDING' />
            <MovieContainer title='Latest Movies' movietype='LATESTMOVIES' />
        </div >
    );
}

export default MovieContent
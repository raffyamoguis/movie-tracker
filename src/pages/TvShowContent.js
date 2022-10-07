import React from 'react'
import MovieContainer from '../components/MovieContainer'

const TvShowContent = () => {
    return (
        <div className='ms-3' >
            <MovieContainer title='Trending Tv Shows' movietype='TRENDINGTV' />
            <MovieContainer title='Latest Tv Shows' movietype='LATESTTVSHOW' />
        </div >
    )
}

export default TvShowContent
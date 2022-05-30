import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({movies}) => {
  return (
    <div className='movieList'>
        {movies.map((film) => ( <MoviesCard movie={film} /> ))}
    </div>
  )
}

export default MoviesList
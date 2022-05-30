import React from 'react'
import Rating from "./Rating"

const MoviesCard = ({movie}) => {
  return (
    <div className='movieCard'>
        <img src={movie.image} alt='Poster' />
        <h3>{movie.name}</h3> 
        <Rating className='ratingCard' score={movie.rating} />
        <p>{movie.date}</p>
    </div>
  )
}

export default MoviesCard
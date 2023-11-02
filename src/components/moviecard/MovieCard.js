import React from 'react'

function MovieCard(props) {
  const { data } = props
  return (
    <div className='card bg-light text-info'>
      <img src={data.Poster} alt={data.Title} />
      <h5>{data.Title}</h5>
      <h6>{data.Year}</h6>
    </div>
  )
}

export default MovieCard
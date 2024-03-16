import React from 'react'
import Movie from './Movie'

const Genre = ({name, description, movieTitle1, movieTitle2}) => {
  return (
    <>
        <div>{name}</div>
        <div>{description}</div>
        <Movie title={movieTitle1} year={"2020"} />
        <Movie title={movieTitle2} year={"2020"} />
    </>
  )
}

export default Genre
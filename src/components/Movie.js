import React from 'react'

const Movie = ({title, year}) => {
  return (
    <>
        <div>{title}</div>
        <div>{year}</div>
    </>

  )
}

export default Movie
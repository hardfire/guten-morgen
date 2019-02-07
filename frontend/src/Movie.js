import React from "react"
import PropTypes from "prop-types"

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>
        {movie.name} - <small>{movie.release_date}</small>
      </h2>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    release_date: PropTypes.number
  })
}

export default Movie

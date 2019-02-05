import React from "react"
import PropTypes from "prop-types"

const Movie = ({ movie }) => {
  return (
    <div>
      {movie.name} - {movie.release_date}
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

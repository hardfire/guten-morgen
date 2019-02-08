import React from "react"
import PropTypes from "prop-types"

const Movie = ({ id, name, release_date }) => {
  return (
    <div>
      <h2>
        {name} - <small>{release_date}</small>
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

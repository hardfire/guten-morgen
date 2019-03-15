import React, { useState, useEffect } from "react"
import Title from "./Title"
import Loading from "./Loading"

const MovieDetail = props => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`/response/${props.match.params.movieId}.json`)
      .then(res => res.json())
      .then(
        result => {
          setMovie(result)
          setIsLoaded(true)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (isLoaded === false) return <Loading />
  if (error !== null) return "Welp! All Okay?"

  return (
    <div>
      <Title title={movie.title.rendered} />
      <div dangerouslySetInnerHTML={{ __html: movie.content.rendered }} />
    </div>
  )
}

export default MovieDetail

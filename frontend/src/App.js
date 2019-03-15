import React, { useState, useEffect } from "react"
import Title from "./Title"
import Movie from "./Movie"
import Loading from "./Loading"

const App = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("response/all.json")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setMovies(
            result.sort((a, b) => {
              return (
                parseInt(a.meta.release_date) - parseInt(b.meta.release_date)
              )
            })
          )
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
    <>
      <Title title="Welcome WordCampers" />
      <div className="container">
        {movies.map(movie => (
          <Movie key={movie.id} {...transformMovie(movie)} />
        ))}
      </div>
    </>
  )
}

const transformMovie = movie => {
  return {
    id: movie.id,
    name: movie.title.rendered,
    release_date: movie.meta.release_date
  }
}

export default App

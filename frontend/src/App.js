import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Title from "./Title"
import Movie from "./Movie"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    }
  }

  componentDidMount() {
    fetch("/index.php/wp-json/wp/v2/movie/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            movies: result
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, movies } = this.state

    if (isLoaded === false) return "Loading"
    if (error !== null) return "Welp! All Okay?"

    return (
      <div>
        <Title title="Welcome WordCampers" />
        <Header />
        <div className="container">
          {movies.map(movie => (
            <Movie key={movie.id} movie={transformMovie(movie)} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

const transformMovie = movie => {
  return {
    id: movie.id,
    name: movie.title.rendered,
    release_date: movie.meta.release_date
  }
}

export default App

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
    fetch("http://127.0.0.1:8000/index.php/wp-json/wp/v2/movie/")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          movies: result
        })
      }, error => {
        this.setState({
          isLoaded: true,
          error
        })
      })
  }

  render() {
    const { error, isLoaded, movies } = this.state
    if(isLoaded === false) {
      return "Loading"
    }

    const movie = {
      id: 10,
      name: "Andaz Apna Apna",
      release_date: 1990
    }
    return (
      <div>
        <Title title="Welcome WordCampers" />
        <Header />
        <div class="container">
          <Movie movie={movie} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

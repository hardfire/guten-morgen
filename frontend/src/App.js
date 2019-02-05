import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Title from "./Title"
import Movie from "./Movie"

class App extends Component {
  render() {
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

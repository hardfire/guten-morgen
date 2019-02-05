import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Title from "./Title"

class App extends Component {
  render() {
    return (
      <div>
        <Title title="Welcome WordCampers" />
        <Header />
        <div class="container">Awesome Application</div>
        <Footer />
      </div>
    )
  }
}

export default App

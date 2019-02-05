import React, { Component } from "react"
import "./App.css"
import Header from "./Header"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          Awesome Application
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

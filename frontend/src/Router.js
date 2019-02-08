import React, { Fragment } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import App from "./App"
import Header from "./Header"
import Footer from "./Footer"
import Title from "./Title"

const MovieDetail = ({ match }) => (
  <div>
    <Title title="New Movie" />
    <h3>{match.params.movieId}</h3>
  </div>
)

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/movie/:movieId" component={MovieDetail} />
      <Footer />
    </Fragment>
  </BrowserRouter>
)
export default Router

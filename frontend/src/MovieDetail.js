import React, { Component } from "react"
import Title from "./Title"
import Loading from "./Loading"

class MovieDetail extends Component{
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      movie: null
    }
  }

  componentDidMount() {
    fetch(`/index.php/wp-json/wp/v2/movie/${this.props.match.params.movieId}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            movie: result
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
        const { error, isLoaded, movie } = this.state

        if (isLoaded === false) return <Loading />
        if (error !== null) return "Welp! All Okay?"

        return (<div>
            <Title title={movie.title.rendered} />
            <div dangerouslySetInnerHTML={{ __html : movie.content.rendered}} />
        </div>)
    }
}

export default MovieDetail
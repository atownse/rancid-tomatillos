import React, { Component } from 'react'
import { getAllMovies } from '../apiCalls.js'
import './Movies.css'
import Card from '../Card/Card.js'

class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: null
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({ error: error.message}))
  }

  render() {
    const movieCards = this.state.movies.map(movie => {
      return (
        <Card
        id = { movie.id }
        posterPath = { movie.poster_path }
        backdropPath = { movie.backdrop_path }
        title = { movie.title }
        averageRating = { movie.average_rating }
        releaseDate = { movie.release_date }
        key = { movie.id }
        />
      )
    })
    return (
      <section className="movies-container">
        { movieCards }
      </section>
    )
  }
}

export default Movies;
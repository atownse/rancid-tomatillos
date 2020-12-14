import React, { Component } from 'react'
import { getAllMovies } from '../apiCalls.js'
import './Movies.css'
import Card from '../Card/Card.js'

class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchInput: "",
      error: null
    }
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  formatSearchInput = () => {
    let lowerCaseInput = this.state.searchInput.toLowerCase()
    let formattedInput = lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1)
    return formattedInput
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const inputTitle = this.formatSearchInput()
    let filteredMovies = this.state.movies.filter(movie => {
      return movie.title.includes(inputTitle)
    })
    if (!filteredMovies.length) {
      alert("No results match this search")
    } else {
      this.setState({ movies: filteredMovies })
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
      <section>
        <section className="search-bar">
          <div className="tb">
            <div className="td"><input type="text" placeholder="Search" value={ this.state.searchInput } onChange={ this.handleChange } required></input></div>
            <div className="td" id="s-cover">
              <button className="button" type="submit" onClick={ this.handleSubmit }>
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </section>
        <section className="movies-container">
          { movieCards }
        </section>
      </section>
    )
  }
}

export default Movies;
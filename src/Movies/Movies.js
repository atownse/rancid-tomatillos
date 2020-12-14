import React, { Component } from 'react'
import { getAllMovies } from '../apiCalls.js'
import './Movies.css'
import Card from '../Card/Card.js'

class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieResults: [],
      searchInput: "",
      error: null
    }
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value, moviesResults: this.state.movies })
  }

  formatSearchInput = () => {
    let lowerCaseInput = this.state.searchInput.toLowerCase()
    let formattedInput = lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1)
    return formattedInput
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let inputTitle = this.formatSearchInput()
    let filteredMovies = this.state.movies.filter(movie => {
      return movie.title.includes(inputTitle)
    })
    if (!filteredMovies.length) {
      alert("No results match this search")
    } else {
      this.setState({ movieResults: filteredMovies })
    }
    this.setState({ searchInput: "" })
  }

  resetSearch = (event) => {
    this.setState({ movieResults: this.state.movies })
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({ error: error.message}))
  }

  createMovieCards(array) {
    let movieCards = array.map(movie => {
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
    return movieCards
  }

  render() {
    let movieCards;
    if (!this.state.movieResults.length) {
      movieCards = this.createMovieCards(this.state.movies)
    } else {
      movieCards = this.createMovieCards(this.state.movieResults)
    }
    
    return (
      <section>
        <section className="search-bar">
          <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search" value={ this.state.searchInput } onChange={ this.handleChange } required></input>
            </div>
            <div className="td" id="s-cover">
              <button className="button" title="submit" onClick={ this.handleSubmit }>
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </section>
        <section className="search-details">
            <button className="clear-button" onClick={this.resetSearch}>Clear Search</button>
            <h3>Search Results: { this.state.movieResults.length ? this.state.movieResults.length : this.state.movies.length } Movies</h3>
        </section>
        <section className="movies-container">
          { movieCards }
        </section>
      </section>
    )
  }
}

export default Movies;
import React, { Component } from 'react'
import './App.css';
// import movieData from '../temp-data.js'
import Movies from '../Movies/Movies.js'
import SingleMovie from '../SingleMovie/SingleMovie.js'
import { getAllMovies, getCurrentMovie } from '../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies : [],
      currentMovie : undefined,
     }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({movies: data.movies}))

    // .then(movies => console.log(movies))
  }

  updateCurrentMovie = (id) => {
    getCurrentMovie(id)
    .then(data => this.setState({currentMovie: data.movie}))
    // this.setState({currentMovie: clickedMovie})
  }

  returnToHomePage = () => {
    this.setState({currentMovie: undefined})
  }

  render() {
    return (
    <main className="App">
      <h1>Rotten Tomatoes Rip-Off</h1>
      {!this.state.movies.length &&
          <h2>…loading movies...</h2>
      }
      {this.state.currentMovie && 
        <SingleMovie movie={ this.state.currentMovie } returnToHomePage={ this.returnToHomePage }/>
      }
      {!this.state.currentMovie &&
        <Movies movies={ this.state.movies } updateCurrentMovie={ this.updateCurrentMovie } />
      }
    </main>
  )}
}

export default App;

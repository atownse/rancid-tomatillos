import React, { Component } from 'react'
import './App.css';
import movieData from '../temp-data.js'
import Movies from '../Movies/Movies.js'
import SingleMovie from '../SingleMovie/SingleMovie.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies : movieData.movies,
      currentMovie : undefined,
     }
  }

  updateCurrentMovie = (id) => {
    const clickedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({currentMovie: clickedMovie})
  }

  returnToHomePage = () => {
    this.setState({currentMovie: undefined})
  }

  render() {
    return (
    <main className="App">
      <h1>Rotten Tomatoes Rip-Off</h1>
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

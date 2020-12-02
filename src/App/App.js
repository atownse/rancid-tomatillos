import React, { Component } from 'react'
import './App.css';
import movieData from '../temp-data.js'
import Movies from '../Movies/Movies.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies : movieData.movies,
      currentMovie : undefined
     }
  }

  updateCurrentMovie = (id) => {
    const clickedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({currentMovie: clickedMovie})
    
  }

  render() {
    return (
    <main className="App">
      <h1>Rotten Tomatoes Rip-Off</h1>
      <Movies movies={ this.state.movies } updateCurrentMovie={ this.updateCurrentMovie } />
    </main>
  )}
}

export default App;

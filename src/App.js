import React, { Component } from 'react'
import './App.css';
import movieData from './temp-data.js'
import Movies from './Movies.js'

class App extends Component {
  constructor() {
    super()
    this.state = { movies : movieData.movies }
  }

  render() {
    return (
    <main className="App">
      <h1>Rotten Tomatoes Rip-Off</h1>
      <Movies movies={ this.state.movies } />
    </main>
  )}
}

export default App;

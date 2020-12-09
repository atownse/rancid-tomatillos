import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Movies from '../Movies/Movies.js'
import SingleMovie from '../SingleMovie/SingleMovie.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      error: ''
     }
  }

  render() {
    return (
    <main className="App">
      <h1>Rotten Tomatoes Rip-Off</h1>
      {/* {!this.state.movies.length &&
          <h2>…loading movies...</h2>
      } */}
      <Route 
        path="/movies/:id" 
        render={ ({match}) => {
          const { id } = match.params
          return <SingleMovie movieID={ id } />
        }}
      />
      <Route exact path="/" render={ () => {
        return (
          <Movies  />
        )}} 
      />
    </main>
  )}
}

export default App;

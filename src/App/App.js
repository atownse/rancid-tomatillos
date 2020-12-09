import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Movies from '../Movies/Movies.js'
import SingleMovie from '../SingleMovie/SingleMovie.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies : [],
      currentMovie : undefined,
      error: ''
     }
  }

  returnToHomePage = () => {
    this.setState({currentMovie: undefined})
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
          return <SingleMovie movieID={ id } returnToHomePage={ this.returnToHomePage } />
        }}
      />

      <Route exact path="/" render={ () => {
        return (
          <Movies movies={ this.state.movies } />
        )}} 
      />
    </main>
  )}
}

export default App;

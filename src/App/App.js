import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
      <Switch>
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
      <Route render={ () => {
        return (
          <h2>This page does not exist</h2>
        )
      }}
      />
      </Switch>
    </main>
  )}
}

export default App;

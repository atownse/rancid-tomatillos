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
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <h1>Rancid Tomatillos</h1>
      <Switch>
      <Route 
        path="/movies/:id" 
        render={ ({match}) => {
          const { id } = match.params
          return <SingleMovie movieID={ id } />
        }}
      />
      <Route exact path="/rancid-tomatillos" render={ () => {
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

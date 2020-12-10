import { screen, render, waitFor } from '@testing-library/react'
import App from './App.js'
import '@testing-library/jest-dom'
import { getAllMovies, getCurrentMovie } from '../apiCalls.js'
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'
jest.mock('../apiCalls.js')

const expectedReturn = {movies: [{
  id: 694919,
  poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
  backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
  title: "Money Plane",
  average_rating: 6.666666666666667,
  release_date: "2020-09-29"
}]}

const expectedMovie = { movie: {
  "id": 1,
  "title": "Fake Movie Title",
  "poster_path": "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
  "backdrop_path": "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
  "release_date": "2019-12-04", 
  "overview": "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
  "average_rating": 6,
  "genres": ["Drama", "Comedy"],
  "budget":63000000, 
  "revenue":100853753,
  "runtime":139,
  "tagline": "It's a movie!" 
}}

describe('App', () => {

  it('should render header', async () =>  {
    getAllMovies.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const message = screen.getByText("Rotten Tomatoes Rip-Off");
    const movieCard = await waitFor(() => screen.getByText("Money Plane"))

    expect(message).toBeInTheDocument()
    expect(movieCard).toBeInTheDocument()
  })

  it('should handle an incorrect path', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    const errMessage = screen.getByText('This page does not exist')
    expect(errMessage).toBeInTheDocument()
  })

  it('should handle path to all movies', async () => {
    getAllMovies.mockResolvedValue(expectedReturn)
    const history = createMemoryHistory()
    history.push('/')
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    const movieTitle = await waitFor(() => screen.getByText('Money Plane'))
    expect(movieTitle).toBeInTheDocument()
  })

  it('should handle path to single movie', async () => {
    getCurrentMovie.mockResolvedValue(expectedMovie)
    const history = createMemoryHistory()
    history.push('/movies/1')
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    const singleMovie = await waitFor(() => screen.getByText('Fake Movie Title'))
    expect(singleMovie).toBeInTheDocument()
  })
})
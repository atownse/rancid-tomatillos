import React from 'react'
import App from '../App/App.js'
import Movies from './Movies.js'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { getAllMovies, getCurrentMovie } from '../apiCalls.js'
jest.mock('../apiCalls.js')


beforeEach(() => {

  getAllMovies.mockResolvedValue({movies: [{
    id: 694919,
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: 6.666666666666667,
    release_date: "2020-09-29"
  }]})

  getCurrentMovie.mockResolvedValue({movie: {
    id: 694919,
    title: "Money Plane",
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    release_date: "2020-09-29",
    overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    genres: ["Action"],
    budget: 0,
    revenue: 0,
    runtime: 82,
    tagline: "Fake tagline",
    average_rating: 6.666666666666667
  }})
})

describe('Movies', () => {
  it('should render the movie cards upon page load', async () => {
    render(
      <MemoryRouter>
        <Movies />
      </MemoryRouter>
    )

    const movieCard =  await waitFor(() => screen.getByText("Money Plane"))

    expect(movieCard).toBeInTheDocument()
  })

  it('Should be able to be clicked on', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    const cardTitle =  await waitFor(() => screen.getByText("Money Plane"))

    userEvent.click(cardTitle)
    
    const tagline = await waitFor(() => screen.getByText("Fake tagline"))

    expect(tagline).toBeInTheDocument()
  })
})

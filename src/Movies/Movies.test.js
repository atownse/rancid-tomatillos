import React from 'react'
import Movies from './Movies.js'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { getAllMovies } from '../apiCalls.js'
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
})

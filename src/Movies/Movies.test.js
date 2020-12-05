import React from 'react'
import Movies from './Movies.js'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Movies', () => {
  it('should render the movie cards upon page load', () => {
    const sampleMovies = [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.666666666666667,
      "release_date": "2020-09-29"
    },
    {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 4.909090909090909,
      "release_date": "2020-09-04"
    }]

    render(<Movies
      movies={ sampleMovies } 
      updateCurrentMovie={ jest.fn() } 
    />)

    const title1 = screen.getByText("Money Plane")
    const title2 = screen.getByText("Mulan")
    const released1 = screen.getByText("Released: 2020-09-29")
    const released2 = screen.getByText("Released: 2020-09-04")

    expect(title1).toBeInTheDocument()
    expect(title2).toBeInTheDocument()
    expect(released1).toBeInTheDocument()
    expect(released2).toBeInTheDocument()
  })

})
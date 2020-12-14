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

  getAllMovies.mockResolvedValue({movies: [
    {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.666666666666667,
      release_date: "2020-09-29"
    },
    {
      id: 718444,
      poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
      title: "Rogue",
      average_rating: 5.428571428571429,
      release_date: "2020-08-20"
    },
    {
      id: 337401,
      poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      title: "Mulan",
      average_rating: 4.909090909090909,
      release_date: "2020-09-04"
    }
  ]})

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

  it("should be able to search movies based on title", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const searchInput = screen.getByPlaceholderText("Search")
    const submitButton = screen.getByTitle('submit')

    userEvent.type(searchInput, 'Rogue')
    userEvent.click(submitButton)

    const moneyPlane = await waitFor(() => screen.queryByText('Money Plane'))

    expect(moneyPlane).not.toBeInTheDocument()
  })

  it("should display movies that havve been properly searched", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    const searchInput = screen.getByPlaceholderText("Search")
    const submitButton = screen.getByTitle('submit')

    userEvent.type(searchInput, 'm')
    userEvent.click(submitButton)

    const rogueTitle = await waitFor(() => screen.queryByText('Rogue'))
    const mulanTitle = await waitFor(() => screen.getByText('Mulan'))
    const moneyPlaneTitle = await waitFor(() => screen.getByText('Money Plane'))

    expect(rogueTitle).not.toBeInTheDocument()
    expect(mulanTitle).toBeInTheDocument()
    expect(moneyPlaneTitle).toBeInTheDocument()
  })
})

import { screen, render, waitFor } from '@testing-library/react'
import App from './App.js'
import '@testing-library/jest-dom'
import { getAllMovies, getCurrentMovie } from '../apiCalls.js'
import userEvent from '@testing-library/user-event'
jest.mock('../apiCalls.js')

describe('App', () => {

  beforeEach(() => {

    getAllMovies.mockResolvedValueOnce({movies: [{
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.666666666666667,
      release_date: "2020-09-29"
    }]})

    getCurrentMovie.mockResolvedValueOnce({movie: {
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

  it('should render all movies correctly', async () => {

    render(
      <App />
    )

    const movieTitle = await waitFor(() => screen.getByText("Money Plane"))
    const releaseDate = await waitFor(() => screen.getByText("Released: 2020-09-29"))


    expect(movieTitle).toBeInTheDocument()
    expect(releaseDate).toBeInTheDocument()
  })

  it('should render single movie correctly', async () => {

    render(
      <App />
    )
  
    const movieCard = await waitFor(() => screen.getByText("Money Plane"))

    userEvent.click(movieCard)
      
    const clickedMovie = await waitFor(() => screen.getByText("Fake tagline"))
    
    expect(clickedMovie).toBeInTheDocument()
  })
})
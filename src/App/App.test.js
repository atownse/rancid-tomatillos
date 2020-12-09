import { screen, render, waitFor } from '@testing-library/react'
import App from './App.js'
import '@testing-library/jest-dom'
import { getAllMovies } from '../apiCalls.js'
import { MemoryRouter } from 'react-router-dom';
jest.mock('../apiCalls.js')

const expectedReturn = {movies: [{
  id: 694919,
  poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
  backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
  title: "Money Plane",
  average_rating: 6.666666666666667,
  release_date: "2020-09-29"
}]}

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

})
import React from 'react'
import App from '../App/App'
import SingleMovie from './SingleMovie.js'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { getCurrentMovie, getAllMovies } from '../apiCalls.js'
jest.mock('../apiCalls.js')
import {MemoryRouter} from 'react-router-dom'


describe('SingleMovie', () => {

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

    it('should render the single movie clicked', async () => {
        render(
          <MemoryRouter>
              <SingleMovie />
          </MemoryRouter>
        );
    
        const movieCard =  await waitFor(() => screen.getByText("Money Plane"))
    
        userEvent.click(movieCard)
          
        const clickedMovie = await waitFor(() => screen.getByText("Fake tagline"))
    
        expect(clickedMovie).toBeInTheDocument()

    })
   

    it('should be able to return to home page', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
          );

        const movieCard =  await waitFor(() => screen.getByText("Money Plane"))
    
        userEvent.click(movieCard)

        const homeLink = await waitFor(() => screen.getByText("Back to Home"))

        userEvent.click(homeLink)

        expect(screen.queryByText("Fake tagline")).not.toBeInTheDocument()
    })

})
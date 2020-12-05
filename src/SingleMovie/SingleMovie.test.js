import React from 'react'
import SingleMovie from './SingleMovie.js'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('SingleMovie', () => {

    it('should render correctly', () => {
        render(
            <SingleMovie 
            movie={{
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
            returnToHomePage={jest.fn()} 
            />
        )

        const title = screen.getByText("Fake Movie Title")
        const reveune = screen.getByText("Revenue: $100.85M")

        expect(title).toBeInTheDocument()
        expect(reveune).toBeInTheDocument()
    })

    it('should be able to return to home page', () => {
        const mockReturnToHomePage = jest.fn()
        render(
            <SingleMovie 
            movie={{
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
            returnToHomePage={mockReturnToHomePage} 
            />
        )

        const button = screen.getByText("Back to Home")

        fireEvent.click(button)

        expect(mockReturnToHomePage).toHaveBeenCalled()
    })

})
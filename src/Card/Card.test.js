import React from 'react'
import Card from './Card.js'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

describe.only('Card', () => {
  it('should render the correct movie content', () => {
    render(<Card
      id = { 420 }
      posterPath = "absolute garbage"
      backdropPath = "supoosed to be a link"
      title = "Random Movie"
      averageRating = { 11 }
      releaseDate =  "The twelfth of never"
      key = { 420 }
      updateCurrentMovie = { jest.fn() }
      />)

      const title = screen.getByText("Random Movie")
      const rating = screen.getByText("Average Rating: 11")

      expect(title).toBeInTheDocument()
      expect(rating).toBeInTheDocument()
  })

  it('should render the correct movie content', () => {
    const mockUpdateCurrentMovie = jest.fn()
    render(<Card
      id = { 420 }
      posterPath = "absolute garbage"
      backdropPath = "supoosed to be a link"
      title = "Random Movie"
      averageRating = "11/10"
      releaseDate =  "The twelfth of never"
      key = { 420 }
      updateCurrentMovie = { mockUpdateCurrentMovie }
      />)

      const movieCard = screen.getByTitle("Random Movie")
      fireEvent.click(movieCard)

      expect(mockUpdateCurrentMovie).toHaveBeenCalledWith(420)
  })
})
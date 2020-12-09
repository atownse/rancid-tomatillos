import React from 'react'
import Card from './Card.js'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'


describe('Card', () => {
  it('should render the correct movie content', () => {
    render(
      <MemoryRouter>
        <Card
          id = { 420 }
          posterPath = "absolute garbage"
          backdropPath = "supoosed to be a link"
          title = "Random Movie"
          averageRating = { 9 }
          releaseDate =  "The twelfth of never"
          key = { 420 }
          />
      </MemoryRouter>
      )
      const title = screen.getByText("Random Movie")
      const rating = screen.getByText("Average Rating: 90%")

      expect(title).toBeInTheDocument()
      expect(rating).toBeInTheDocument()
  })
})
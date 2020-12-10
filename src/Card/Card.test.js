import React from 'react'
import Card from './Card.js'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'


describe('Card', () => {
  it('should render the correct movie content', () => {
    render(
      <MemoryRouter>
        <Card
          id = { 111 }
          posterPath = "Tinkerbell"
          backdropPath = "supoosed to be a link"
          title = "Random Movie"
          averageRating = { 9 }
          releaseDate =  "The twelfth of never"
          key = { 111 }
          />
      </MemoryRouter>
    )
      const title = screen.getByText("Random Movie")
      const rating = screen.getByText("Average Rating: 90%")

      expect(title).toBeInTheDocument()
      expect(rating).toBeInTheDocument()
  })

  it('should be able to be clicked on', () => {
    render(
      <MemoryRouter>
        <Card
          id = { 111 }
          posterPath = "Tinkerbell"
          backdropPath = "supoosed to be a link"
          title = "Random Movie"
          averageRating = { 9 }
          releaseDate =  "The twelfth of never"
          key = { 111 }
          />
      </MemoryRouter>
    )
    const movieTitle = screen.getByText('Random Movie')

    userEvent.click(movieTitle)
    expect(movieTitle.closest('a')).toHaveAttribute('href', '/movies/111')
  })
})
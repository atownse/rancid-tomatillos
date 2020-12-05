import React from 'react'
import './Movies.css'
import Card from '../Card/Card.js'

const Movies = ({movies, updateCurrentMovie}) => {
  const movieCards = movies.map(movie => {
    return (
      <Card
      id = { movie.id }
      posterPath = { movie.poster_path }
      backdropPath = { movie.backdrop_path }
      title = { movie.title }
      averageRating = { movie.average_rating }
      releaseDate = { movie.release_date }
      key = { movie.id }
      updateCurrentMovie = { updateCurrentMovie }
      />
    )
  })

  return (
    <section className="movies-container">
      { movieCards }
    </section>
  )
}

export default Movies;
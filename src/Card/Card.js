import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
  <section onClick={() => {props.updateCurrentMovie(props.id)}} className="card">
    <img src={ props.posterPath } alt="card-img"/>
    <h2>{ props.title }</h2>
    <p>Average Rating: { props.averageRating }</p>
    <p>Released: { props.releaseDate}</p>
  </section>
  )
}

export default Card;
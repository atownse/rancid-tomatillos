import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  return (
    <Link to={`/movies/${props.id}`}>
      <section title={ props.title } className="card">
        <img className="card-image" src={ props.posterPath } alt="card-img"/>
        <h2>{ props.title }</h2>
        <p>Average Rating: { (props.averageRating * 10).toFixed(0) }%</p>
        <p>Released: { props.releaseDate}</p>
      </section>
    </Link>
  )
}

export default Card;
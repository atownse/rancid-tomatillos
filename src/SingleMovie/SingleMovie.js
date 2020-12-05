import React from 'react';
import './SingleMovie.css'

const SingleMovie = ({movie, returnToHomePage}) => {
    return(
        <section className="single-movie">
            <h2>{ movie.title }</h2>
            <p>{ movie.tagline }</p>
            <img src={ movie.backdrop_path } alt="single-movie"/>
            <p>{ movie.overview }</p>
            <p>Average Rating: { (movie.average_rating * 10).toFixed(0) }%</p>
            <p>Genre: { movie.genres.join(', ') }</p>
            <p>Revenue: ${ (movie.revenue / 1000000).toFixed(2) }M</p>
            <p>Runtime: { movie.runtime } mins</p>
            <button onClick={() => {returnToHomePage()}}>Back to Home</button>
        </section>
    )
}

export default SingleMovie;
import React, { Component } from 'react';


class SingleMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {movie: this.props.movie, home: this.props.returnToHomePage}
    }

    render() {
        const movie = this.state.movie;
        return(
        <section className="single-movie">
            <h2>{ movie.title }</h2>
            <p>{ movie.tagline }</p>
            <img src={ movie.backdrop_path } alt="single-movie"/>
            <p>{ movie.overview }</p>
            <p>Average Rating: { movie.average_rating }</p>
            <p>Genre: { movie.genres.join(', ') }</p>
            <p>Revenue: ${ (movie.revenue / 1000000).toFixed(2) }M</p>
            <p>Runtime: { movie.runtime } mins</p>
            <button onClick={() => {this.props.returnToHomePage()}}>Back to Home</button>
        </section>
        )
    }
}

export default SingleMovie;
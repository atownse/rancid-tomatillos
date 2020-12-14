import React, { Component } from 'react';
import './SingleMovie.css'
import { getCurrentMovie } from '../apiCalls.js'
import { Link } from 'react-router-dom'

class SingleMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null,
            error: null
        }
    }

    componentDidMount() {
        getCurrentMovie(this.props.movieID)
        .then(data => this.setState({ movie: data.movie }))
        .catch(error => this.setState({ error: error.message}))
    }

    render() {
        const { movie } = this.state
        return(
            <section className="single-movie">
                { movie && 
                    <>
                        <h2 className="title">{ movie.title }</h2>
                        <p><em>{ movie.tagline }</em></p>
                        <img className="single-image" src={ movie.backdrop_path } alt="single-movie"/>
                        <p>{ movie.overview }</p>
                        <p>Average Rating: { (movie.average_rating * 10).toFixed(0) }%</p>
                        <p>Genre: { movie.genres.join(', ') }</p>
                        <p>Revenue: ${ (movie.revenue / 1000000).toFixed(2) }M</p>
                        <p>Runtime: { movie.runtime } mins</p>
                        <Link to="/rancid-tomatillos" >
                            <button className="button-return">Back to Home</button>
                        </Link>
                    </>
                }
            </section>
        )
    }
}

export default SingleMovie;
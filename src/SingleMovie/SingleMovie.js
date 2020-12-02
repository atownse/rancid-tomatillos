import React, { Component } from 'react';


class SingleMovie extends Component {
    constructor(movie) {
        super(movie)
        this.state = {movie: movie}
    }

    render() {
        return(
        <section className="single-movie">
            <h2>{this.state.title}</h2>
            <img src="" alt="single-movie"/>
            <p>overview</p>
            <p>rating</p>
            <p>genre</p>
            <p>rev</p>
        </section>
        )
    }
}

export default SingleMovie;
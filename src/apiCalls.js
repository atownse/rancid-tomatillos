// import axios from 'axios'
// // import React from 'react'

// export const getAllMovies = async () => {
  
//   const allMovies = await axios.get('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//   // console.log(allMovies.data.movies)
//   return allMovies.movies
// }

export const getAllMovies = () => {
  return (
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
  )
}

export const getCurrentMovie = (id) => {
  return (
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
  )
}
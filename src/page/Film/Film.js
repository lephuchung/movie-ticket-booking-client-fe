import React from 'react'
import "./Film.scss"
import MovieList from '../../component/MovieList/MovieList'
import { movies, moviesHumour, moviesAction } from '../Data'

const Film = () => {
  const all = true;
  return (
    <div className='film-page-container'>
      <MovieList genre={"Danh sách phim"} movies={movies} all={all} />
    </div>
  )
}

export default Film
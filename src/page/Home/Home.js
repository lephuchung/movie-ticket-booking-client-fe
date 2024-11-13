import React from 'react'
import './Home.scss';
import {
  movie,
  movies,
  moviesAction,
  moviesHumour
} from './Data';
import Carousel from '../../component/Carousel/Carousel';
import MovieList from '../../component/MovieList/MovieList';


const Home = () => {
  return (
    <div className='home'>
      <Carousel images={movie} />
      <MovieList genre={"Phim đang chiếu"} movies={movies} />
      <MovieList genre={"Phim hài kịch"} movies={moviesHumour} />
      <MovieList genre={"Phim hành động"} movies={moviesAction} />
    </div>
  )
}

export default Home
import React from 'react'
import './Home.scss';
import {
  movie,
  movies,
  moviesAction,
  moviesHumour
} from '../Data';
import Carousel from '../../component/Carousel/Carousel';
import MovieList from '../../component/MovieList/MovieList';
import MovieListColumn from '../../component/MovieListColumn/MovieListColumn';
import useMediaQuery from '../../customHook/useMediaQuery';


const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width: 360px)');
  const MovieListComponent = isSmallScreen ? MovieListColumn : MovieList;
  return (
    <div className='home'>
      <Carousel images={movie} />
      <div className='home-film-list-area'>
        <MovieListComponent genre={"Phim đang chiếu"} movies={movies} />
        <MovieListComponent genre={"Phim hài kịch"} movies={moviesHumour} />
        <MovieListComponent genre={"Phim hành động"} movies={moviesAction} />
      </div>
    </div>
  )
}

export default Home
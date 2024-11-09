import React from 'react'
import './Home.scss';
import Carousel from './Carousel';
import { movie } from './Data';
import MovieList from './MovieList';


const Home = () => {
  return (
    <div className='home'>
      <div>Home</div>
      <Carousel images={movie}/>
      <MovieList />
    </div>
  )
}

export default Home
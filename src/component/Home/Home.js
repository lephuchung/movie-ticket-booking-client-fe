import React from 'react'
import './Home.scss';
import Carousel from './Carousel';
import { movie } from './Data';


const Home = () => {
  return (
    <div className='home'>
      <div>Home</div>
      <Carousel images={movie}/>
    </div>
  )
}

export default Home
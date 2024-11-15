import React from 'react';
import './MovieList.scss';
import FilmCard from '../FilmCard/FilmCard';
import { Link } from 'react-router-dom';

const MovieList = ({ genre, movies, all = false }) => {
  return (
    <div className="movie-list">
      {genre &&
        <div className='movie-list-title-area'>
          <h2 className='movie-list-title'>{genre}</h2>
          {!all &&
            <Link to={`/category/${genre}`} >
              <button className='movie-list-title-button'>Tất cả</button>
            </Link>
          }
        </div>
      }
      <div className='movie-list-content'>
        {movies.map((movie, index) => (
          <FilmCard key={index} film={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

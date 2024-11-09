// src/MovieList.js
import React from 'react';
import Card from './Card';
import { movies } from './Data';
import './MovieList.scss';

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;

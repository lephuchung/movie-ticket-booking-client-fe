// src/Card.js
import React from 'react';
import './Card.scss';
import { FaStar } from "react-icons/fa6"

function Card({ movie }) {
  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} className="card-image" />
      <h3 className="card-title">{movie.title}</h3>
      <p className="card-rating"><FaStar style={{ color: 'gold' }}/> {movie.rating}</p>
    </div>
  );
}

export default Card;

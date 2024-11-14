import React from 'react';
import './MovieListColumn.scss';
import FilmCardSmall from '../FilmCardSmall/FilmCardSmall';

const MovieListColumn = ({ genre, movies }) => {
    return (
        <div className="movie-list-column">
            {genre &&
                <h2 className='movie-list-column-title'>{genre}</h2>
            }
            <div className='movie-list-column-content'>
                {movies.map((movie, index) => (
                    <FilmCardSmall key={index} film={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieListColumn;

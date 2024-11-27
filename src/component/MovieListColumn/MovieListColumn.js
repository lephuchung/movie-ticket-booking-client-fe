import React from 'react';
import './MovieListColumn.scss';
import FilmCardSmall from '../FilmCardSmall/FilmCardSmall';
import { Link, useNavigate } from 'react-router-dom';
import { getGenreTranslation } from '../../language/translateCategory';

const MovieListColumn = ({ genre, movies, all = false }) => {
    const navigate = useNavigate()
    const handleOnclickAll = () => {
        navigate(`/category/${genre}`)
    }

    const displayedMovies = all ? movies : movies.slice(0, 4);

    return (
        <div className="movie-list-column">
            {genre &&
                <h2 className='movie-list-column-title'>{getGenreTranslation(genre)}</h2>
            }
            <div className='movie-list-column-content'>
                {displayedMovies.map((movie, index) => (
                    <FilmCardSmall key={index} film={movie} />
                ))}
            </div>
            {
                !all &&
                <button className='movie-list-column-button' onClick={() => { handleOnclickAll() }}>
                    <span>
                        Tất cả
                    </span>
                </button>
            }
        </div>
    );
}

export default MovieListColumn;

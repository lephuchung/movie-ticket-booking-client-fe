import React from 'react'
import emptyPoster from "./img-blank.bb695736.svg"
import "./FilmCard.scss"
import { Link } from 'react-router-dom'

const FilmCard = ({
    film = {
        Title: "Không xác định",
        Rating: 10,
        PosterUrl: emptyPoster
    }
}) => {
    return (
        <Link to={`/film/${film.Title}`} className='film-card-link'>
            <div className='film-card'>
                <span className='film-card-rating'>{film.Rating}/10</span>
                <img src={film?.PosterUrl ? film?.PosterUrl : emptyPoster} alt="" className='film-card-poster' />
                <span className='film-card-title'>{film.Title}</span>
            </div>
        </Link>

    )
}

export default FilmCard
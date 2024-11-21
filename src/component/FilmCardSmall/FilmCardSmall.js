import React from 'react'
import emptyPoster from "./img-blank.bb695736.svg"
import "./FilmCardSmall.scss"
import { Link } from 'react-router-dom'

const FilmCardSmall = ({
    film = {
        Title: "Không xác định",
        Rating: "10/10",
        PosterUrl: emptyPoster
    }
}) => {

    return (
        <Link to={`/film/${film.Title}`} className='film-card-small-link'>
            <div className='film-card-small'>
                <img src={film?.PosterUrl} alt="" className='film-card-small-poster' />
                <div className='film-card-small-information'>
                    <span className='film-card-small-title'>{film.Title}</span>
                    <span className='film-card-small-rating'>{film.Rating}/10</span>
                </div>
            </div>
        </Link>
    )
}

export default FilmCardSmall
import React from 'react'
import emptyPoster from "./img-blank.bb695736.svg"
import "./BookingFilmItemSmall.scss"

const BookingFilmItemSmall = ({
    film = {
        Title: "Không xác định",
        Rating: 10,
        PosterUrl: emptyPoster
    },
    setFilm
}) => {
    const handleClickFilmItem = () => {
        setFilm(film)
    }
    return (
        <div className='booking-film-item-small' onClick={() => handleClickFilmItem()}>
            <img src={film?.PosterUrl ? film?.PosterUrl : emptyPoster} alt="" className='booking-film-item-small-poster' />
            <div className='booking-film-item-small-information'>
                <span className='booking-film-item-small-title'>{film.Title}</span>
                <span className='booking-film-item-small-rating'>{film.Rating}/10</span>
            </div>
        </div>

    )
}

export default BookingFilmItemSmall
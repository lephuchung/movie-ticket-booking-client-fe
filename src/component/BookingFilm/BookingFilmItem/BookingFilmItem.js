import React from 'react'
import emptyPoster from "./img-blank.bb695736.svg"
import "./BookingFilmItem.scss"

const BookingFilmItem = ({
    film = {
        Title: "Không xác định",
        Rating: 10,
        PosterUrl: emptyPoster
    },
    setFilm }) => {
    const handleClickFilmItem = () => {
        setFilm(film)
    }
    return (
        <div className='booking-film-item' onClick={() => handleClickFilmItem()}>
            <span className='booking-film-rating'>{film.Rating}/10</span>
            <img src={film?.PosterUrl ? film?.PosterUrl : emptyPoster} alt="" className='booking-film-poster' />
            <span className='booking-film-title'>{film.Title}</span>
        </div>

    )
}

export default BookingFilmItem
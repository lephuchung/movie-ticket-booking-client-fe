import React from 'react'
import poster from "./image.png"
import "./BookingFilmItem.scss"

const BookingFilmItem = ({ setFilm }) => {

    const film = {
        title: "Venom: Kèo Cuối"
    }
    const handleClickFilmItem = () => {
        setFilm(film.title)
    }
    return (
        <div className='booking-film-item' onClick={() => handleClickFilmItem()}>
            <img src={poster} alt="" className='booking-film-poster' />
            <span className='booking-film-title'>{film.title}</span>
        </div>

    )
}

export default BookingFilmItem
import React from 'react'
import poster from "./image.png"
import "./BookingFilmItem.scss"

const BookingFilmItem = ({ setFilm }) => {

    const film = {
        title: "Venom: Kèo Cuối",
        rating: "8.5/10",
        posterUrl: "https://cdn.galaxycine.vn/media/2024/10/30/the-paradise-of-thorns-1_1730262436681.jpg"
    }
    const handleClickFilmItem = () => {
        setFilm(film)
    }
    return (
        <div className='booking-film-item' onClick={() => handleClickFilmItem()}>
            <img src={film?.posterUrl} alt="" className='booking-film-poster' />
            <span className='booking-film-title'>{film.title}</span>
        </div>

    )
}

export default BookingFilmItem
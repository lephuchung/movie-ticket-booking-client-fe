import React, { useState } from 'react'
import "./BookingFilm.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import BookingFilmItem from './BookingFilmItem/BookingFilmItem';

const BookingFilm = ({ setFilm }) => {
    const [openToggle, setOpenToggle] = useState(true)

    const handleClickIcon = () => {
        setOpenToggle(!openToggle);
    }

    return (
        <div className='booking-film'>
            <div className='booking-film-title'>
                <h2 className='title'>Chọn phim</h2>
                {openToggle
                    ? <IoIosArrowDropup className='icon' onClick={() => handleClickIcon()} />
                    : <IoIosArrowDropdown className='icon' onClick={() => handleClickIcon()} />
                }

            </div>
            {openToggle &&
                <div className='booking-film-list'>
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                    <BookingFilmItem className="booking-film-item" setFilm={setFilm} />
                </div>
            }
        </div>
    )
}

export default BookingFilm
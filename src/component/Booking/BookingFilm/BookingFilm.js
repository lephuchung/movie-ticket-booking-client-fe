import React, { useState } from 'react'
import "./BookingFilm.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import BookingFilmItem from './BookingFilmItem/BookingFilmItem';

const BookingFilm = ({
    province,
    setFilm,
    openToggleFilm,
    setOpenToggleProvince,
    setOpenToggleFilm,
    setOpenToggleShowTime,
}) => {
    const handleClickToggle = () => {
        setOpenToggleProvince(false);
        setOpenToggleShowTime(false);
        setOpenToggleFilm(!openToggleFilm);
    }

    const handleClickFilmItem = (film) => {
        setFilm(film);
        setOpenToggleFilm(false);
        setOpenToggleShowTime(true);
    }

    return (
        <div className='booking-film'>
            <div className='booking-film-title' onClick={() => handleClickToggle()} >
                <h2 className='title'>Chọn phim</h2>
                {openToggleFilm
                    ? <IoIosArrowDropup className='icon' />
                    : <IoIosArrowDropdown className='icon' />
                }

            </div>
            {openToggleFilm && province &&
                <div className='booking-film-list'>
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                    <BookingFilmItem className="booking-film-item" setFilm={handleClickFilmItem} />
                </div>
            }
        </div>
    )
}

export default BookingFilm
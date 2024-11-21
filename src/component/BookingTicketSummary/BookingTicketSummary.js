import React from 'react'
import emptyPoster from './img-blank.bb695736.svg'
import "./BookingTicketSummary.scss"

const BookingTicketSummary = ({
    film = {
        Title: "hehe",
        Rating: "8.5/10",
        PosterUrl: "../BookingFilm/BookingFilmItem/image.png"
    },
    showtime,
    seats,
    totalAmount = 0
}) => {
    return (
        <div className="ticket-summary">
            {film.Title &&
                <div className="header">
                    <h1 className='film-title'>{film?.Title}</h1>
                    <span className="rating">{film?.Rating}/10</span>
                </div>
            }

            <div className="film-info">
                {film.PosterUrl
                    ? <img src={film.PosterUrl} alt={film?.Title} className="film-poster" />
                    : <img src={emptyPoster} alt={film?.Title} className="film-poster" />
                }

                <div className="details">
                    {showtime.time &&
                        <div>
                            <p>{showtime?.theatreName} - Room 1</p>
                            <p>Suất: <strong>{showtime?.time}</strong></p>
                        </div>
                    }
                </div>
            </div>
            <hr />
            <div className="seat-info">
                <div className='seat-number'>
                    <p>{seats?.length}x Ghế đơn</p>
                    <p>Ghế: {seats.join(", ")}</p>
                </div>
                <p className="seat-price">{totalAmount.toLocaleString()} ₫</p>
            </div>
            <hr />
            <div className="total">
                <span>Tổng cộng</span>
                <span className="total-amount">{totalAmount.toLocaleString()} ₫</span>
            </div>
            {seats.length !== 0 &&
                <div className="actions">
                    <button className="back-button">Quay lại</button>
                    <button className="continue-button">Tiếp tục</button>
                </div>
            }
        </div>
    );
}

export default BookingTicketSummary
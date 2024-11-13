import React from 'react'
import emptyPoster from './img-blank.bb695736.svg'
import "./BookingTicketSummary.scss"

const BookingTicketSummary = ({
    film = {
        title: "hehe",
        rating: "8.5/10",
        posterUrl: "../BookingFilm/BookingFilmItem/image.png"
    },
    showtime,
    seats,
    totalAmount = 0
}) => {
    return (
        <div className="ticket-summary">
            {film.title &&
                <div className="header">
                    <h1 className='film-title'>{film?.title}</h1>
                    <span className="rating">{film?.rating}</span>
                </div>
            }

            <div className="film-info">
                {film.posterUrl
                    ? <img src={film.posterUrl} alt={film?.title} className="film-poster" />
                    : <img src={emptyPoster} alt={film?.title} className="film-poster" />
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
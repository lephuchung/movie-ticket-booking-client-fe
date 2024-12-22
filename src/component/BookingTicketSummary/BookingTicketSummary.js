import React, { useEffect, useState } from 'react'
import emptyPoster from './img-blank.bb695736.svg'
import "./BookingTicketSummary.scss"
import { getDateTimeFromISOTime } from '../../utils/getDateTimeFromIsoTime';
import { fetchShowtimeDetail } from '../../apis/fetchShowtimeDetail';
import { fetchRoomDetail } from '../../apis/fetchRoomDetail';
import { fetchTheaterDetail } from '../../apis/ferchTheaterDetail';

const BookingTicketSummary = ({
    film = {
        Title: "Không xác định",
        Rating: "10/10",
        PosterUrl: emptyPoster
    },
    showtime,
    seats,
    price = 10000,
    setProvince,
    setFilm,
    setShowtime,
    setSeats,
}) => {
    const [showtimeSelected, setShowtimeSelected] = useState(null);
    const [theater, setTheater] = useState(null);
    const [room, setRoom] = useState(null);
    const handleOnclickBackButton = () => {
        setProvince("");
        setFilm("");
        setShowtime({});
        setSeats([]);
    };

    const getShowtimeDetail = async (showtimeId) => {
        const showtimeFetch = await fetchShowtimeDetail(showtimeId);
        setShowtimeSelected(showtimeFetch);
    };

    const getRoomAndTheater = async (showtimeSelected) => {
        if (!showtimeSelected) return;
        const roomFetch = await fetchRoomDetail(showtimeSelected.RoomId);
        setRoom(roomFetch);
        const theaterFetch = await fetchTheaterDetail(showtimeSelected.TheaterId);
        setTheater(theaterFetch);
    };

    useEffect(() => {
        getShowtimeDetail(showtime.showtimeId);
    }, [showtime]);

    useEffect(() => {
        getRoomAndTheater(showtimeSelected);
    }, [showtimeSelected])

    console.log("check showtime selected: ", showtimeSelected);

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
                    {showtimeSelected && showtimeSelected.length != 0 &&
                        <div>
                            <p>{theater?.Name} - {room?.Name}</p>
                            <p>Suất: <strong>{getDateTimeFromISOTime(showtimeSelected?.StartTime)}</strong></p>
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
                {
                    price && <p className="seat-price">{price.toLocaleString()} ₫</p>
                }
            </div>
            <hr />
            <div className="total">
                <span>Tổng cộng</span>
                <span className="total-amount">{(seats.length * price).toLocaleString()} ₫</span>
            </div>
            {seats.length !== 0 &&
                <div className="actions">
                    <button className="back-button" onClick={() => { handleOnclickBackButton() }}>Quay lại</button>
                    <button className="continue-button">Tiếp tục</button>
                </div>
            }
        </div>
    );
}

export default BookingTicketSummary
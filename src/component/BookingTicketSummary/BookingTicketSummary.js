import React, { useEffect, useState } from 'react'
import emptyPoster from './img-blank.bb695736.svg'
import "./BookingTicketSummary.scss"
import { getDateTimeFromISOTime } from '../../utils/getDateTimeFromIsoTime';
import { fetchShowtimeDetail } from '../../apis/fetchShowtimeDetail';
import { fetchRoomDetail } from '../../apis/fetchRoomDetail';
import { fetchTheaterDetail } from '../../apis/ferchTheaterDetail';
import { getDateHourMinuteFromISOTime } from '../../utils/getDayHourMinuteFromIsoTime';
import { BookingTicket } from '../../apis/bookingTicket';
import { Base64 } from 'js-base64';

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
    const [isBooking, setIsBooking] = useState(false);  // Thêm state isBooking
    const handleOnclickBackButton = () => {
        setProvince("");
        setFilm("");
        setShowtime({});
        setSeats([]);
    };

    const handleOnclickBookingButton = async () => {
        if (!showtimeSelected) return;
        if (seats.length == 0) return;
        const user = localStorage.getItem("user");
        const userData = JSON.parse(user);
        const data = {
            userId: userData.UserId,
            showtimeId: showtimeSelected.ShowtimeId,
            seatNumbers: seats,
        }
        setIsBooking(true);

        try {
            await BookingTicket(data);
            const encodedData = Base64.encode(JSON.stringify(data));
            setTimeout(() => {
                window.location.href = `/payment/${encodedData}`;
            }, 4000);

        } catch (error) {
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        } finally {
            setTimeout(() => {
                setIsBooking(false);
            }, 5000);
        }
    }

    const getShowtimeDetail = async (showtimeId) => {
        if (!showtimeId) return;
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
        getShowtimeDetail(showtime?.showtimeId);
    }, [showtime]);

    useEffect(() => {
        if (showtimeSelected) getRoomAndTheater(showtimeSelected);
    }, [showtimeSelected])

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
                            <p>Suất: <strong>{getDateHourMinuteFromISOTime(showtimeSelected?.StartTime)}</strong></p>
                        </div>
                    }
                </div>
            </div>
            <hr />
            <div className="seat-info">
                <div className='seat-number'>
                    <p>{seats?.length}x Ghế đơn</p>
                    <p>Ghế: {seats?.join(", ")}</p>
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
                    <button
                        className={`continue-button ${isBooking ? 'disabled' : ''}`}
                        onClick={() => { handleOnclickBookingButton() }}
                        disabled={isBooking}
                    >
                        {isBooking ? 'Đang đặt vé' : 'Đặt vé'}
                    </button>
                </div>
            }
        </div>
    );
}

export default BookingTicketSummary
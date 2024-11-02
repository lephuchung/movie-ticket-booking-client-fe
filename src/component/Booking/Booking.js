import React, { useState } from 'react'
import BookingProvince from './BookingProvince/BookingProvince'
import BookingFilm from './BookingFilm/BookingFilm';
import "./Booking.scss"
import BookingShowTime from './BookingShowTime/BookingShowTime';
import BookingSeat from './BookingSeat/BookingSeat';
import BookingTicketSummary from './BookingTicketSummary/BookingTicketSummary';

const Booking = () => {
  const [province, setProvince] = useState("");
  const [film, setFilm] = useState("");
  const [showtime, setShowtime] = useState({ time: "", theatreName: "" });
  const [seats, setSeats] = useState([]);

  const [openToggleProvince, setOpenToggleProvince] = useState(true)
  const [openToggleFilm, setOpenToggleFilm] = useState(false)
  const [openToggleShowTime, setOpenToggleShowTime] = useState(false);
  const [openToggleSeat, setOpenToggleSeat] = useState(false);

  const data = {
    province,
    film,
    showtime,
    seats,
  }
  console.log("check data: ", data);

  return (
    <div className='booking'>
      <div className='booking-selection'>
        <BookingProvince
          province={province}
          setProvince={setProvince}
          openToggleProvince={openToggleProvince}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleSeat={setOpenToggleSeat}
        />
        <BookingFilm
          province={province}
          setFilm={setFilm}
          openToggleFilm={openToggleFilm}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleSeat={setOpenToggleSeat}

        />
        <BookingShowTime
          province={province}
          film={film}
          showtime={showtime}
          setShowtime={setShowtime}
          openToggleShowTime={openToggleShowTime}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
          setOpenToggleSeat={setOpenToggleSeat}
        />
        <BookingSeat
          province={province}
          film={film}
          showtime={showtime}
          setSeats={setSeats}
          openToggleSeat={openToggleSeat}
          setOpenToggleSeat={setOpenToggleSeat}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
        />
      </div>
      <div className='booking-result'>
        <BookingTicketSummary
          film={film}
          showtime={showtime}
          seats={seats}
        />
      </div>
    </div>
  )
}

export default Booking
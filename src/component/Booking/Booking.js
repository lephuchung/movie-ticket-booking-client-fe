import React, { useState } from 'react'
import BookingProvince from './BookingProvince/BookingProvince'
import BookingFilm from './BookingFilm/BookingFilm';
import "./Booking.scss"
import BookingShowTime from './BookingShowTime/BookingShowTime';

const Booking = () => {
  const [province, setProvince] = useState("");
  const [openToggleProvince, setOpenToggleProvince] = useState(true)
  const [film, setFilm] = useState("");
  const [openToggleFilm, setOpenToggleFilm] = useState(false)
  const [showtime, setShowtime] = useState({ time: "", theatreName: "" });
  const [openToggleShowTime, setOpenToggleShowTime] = useState(false);

  const data = {
    province,
    film,
    showtime,
  }
  // console.log("check data: ", data);

  return (
    <div className='booking'>
      <BookingProvince
        province={province}
        setProvince={setProvince}
        openToggleProvince={openToggleProvince}
        setOpenToggleProvince={setOpenToggleProvince}
        setOpenToggleFilm={setOpenToggleFilm}
        setOpenToggleShowTime={setOpenToggleShowTime}
      />
      <BookingFilm
        province={province}
        setFilm={setFilm}
        openToggleFilm={openToggleFilm}
        setOpenToggleProvince={setOpenToggleProvince}
        setOpenToggleFilm={setOpenToggleFilm}
        setOpenToggleShowTime={setOpenToggleShowTime}
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
      />
    </div>
  )
}

export default Booking
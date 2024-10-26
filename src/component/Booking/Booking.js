import React, { useState } from 'react'
import BookingTheatre from './BookingTheatre/BookingTheatre'
import "./Booking.scss"
import BookingFilm from './BookingFilm/BookingFilm';

const Booking = () => {
  const [theatre, setTheatre] = useState("");
  const [film, setFilm] = useState("")
  const data = {
    theatre,
    film,
  }
  console.log("check data: ", data);

  return (
    <div className='booking'>
      <BookingTheatre setTheatre={setTheatre} />
      <BookingFilm setFilm={setFilm} />
    </div>
  )
}

export default Booking
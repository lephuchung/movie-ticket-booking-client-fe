import React, { useState } from 'react'
import BookingProvince from './BookingProvince/BookingProvince'
import "./Booking.scss"

const Booking = () => {
  const [province, setProvince] = useState("")

  return (
    <div className='booking'>
      <BookingProvince setProvince={setProvince} />
    </div>
  )
}

export default Booking
import React, { useState } from 'react'
import "./BookingTheatre.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const BookingTheatre = ({ setTheatre }) => {
  const [openToggle, setOpenToggle] = useState(true)

  const handleClickIcon = () => {
    setOpenToggle(!openToggle);
  }

  return (
    <div className='booking-province'>
      <div className='booking-province-title'>
        <h2 className='title'>Chọn rạp chiếu</h2>
        {openToggle
          ? <IoIosArrowDropup className='icon' onClick={() => handleClickIcon()} />
          : <IoIosArrowDropdown className='icon' onClick={() => handleClickIcon()} />
        }

      </div>
      {openToggle &&
        <div className='booking-province-list'>
          <div className='booking-province-item' onClick={() => setTheatre("Hải Phòng")}> Hải Phòng </div>
          <div className='booking-province-item' onClick={() => setTheatre("Hà Nội")}> Hà Nội </div>
        </div>
      }
    </div>
  )
}

export default BookingTheatre
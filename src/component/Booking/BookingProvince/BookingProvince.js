import React, { useState } from 'react'
import "./BookingProvince.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const BookingProvince = ({ setProvince }) => {
  const [openToggle, setOpenToggle] = useState(true)

  const handleClickIcon = () => {
    setOpenToggle(!openToggle);
  }

  return (
    <div className='booking-province'>
      <div className='booking-province-title'>
        <h2 className='title'>Chọn vị trí</h2>
        {openToggle
          ? <IoIosArrowDropup className='icon' onClick={() => handleClickIcon()} />
          : <IoIosArrowDropdown className='icon' onClick={() => handleClickIcon()} />
        }

      </div>
      {openToggle &&
        <div className='booking-province-list'>
          <div className='booking-province-item' onClick={() => setProvince("Hải Phòng")}> Hải Phòng </div>
          <div className='booking-province-item' onClick={() => setProvince("Hà Nội")}> Hà Nội </div>
        </div>
      }
    </div>
  )
}

export default BookingProvince
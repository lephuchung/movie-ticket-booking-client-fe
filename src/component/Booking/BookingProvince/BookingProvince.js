import React, { useState } from 'react'
import "./BookingProvince.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const BookingProvince = ({
  province,
  setProvince,
  openToggleProvince,
  setOpenToggleProvince,
  setOpenToggleFilm,
  setOpenToggleShowTime
}) => {
  const provinceArr = [
    { name: "Hải Phòng" },
    { name: "Hà Nội" },
    { name: "Thành phố Hồ Chí Minh" },
  ]

  const handleClickToggle = () => {
    setOpenToggleFilm(false)
    setOpenToggleShowTime(false)
    setOpenToggleProvince(!openToggleProvince);
  }

  const handleSelectProvince = (province) => {
    setProvince(province);
    setOpenToggleFilm(true);
    setOpenToggleProvince(false);
  }

  return (
    <div className='booking-province'>
      <div className='booking-province-title' onClick={() => handleClickToggle()}>
        <h2 className='title'>Chọn thành phố</h2>
        {openToggleProvince
          ? <IoIosArrowDropup className='icon' />
          : <IoIosArrowDropdown className='icon' />
        }

      </div>
      {openToggleProvince &&
        <div className='booking-province-list'>
          {provinceArr.map((item) => {
            return (
              <div
                key={item.name}
                className={`booking-province-item ${province.name === item.name ? 'active' : ''}`}
                onClick={() => handleSelectProvince(item)}
              >
                {item.name}
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default BookingProvince
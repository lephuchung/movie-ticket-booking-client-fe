import React from 'react'
import "./BookingProvince.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const BookingProvince = ({
  province,
  setProvince,
  provinces,
  openToggleProvince,
  setOpenToggleProvince,
  setOpenToggleFilm,
  setOpenToggleShowTime,
  setOpenToggleSeat,
}) => {
  const handleClickToggle = () => {
    setOpenToggleFilm(false);
    setOpenToggleShowTime(false);
    setOpenToggleSeat(false);
    setOpenToggleProvince(!openToggleProvince);
  }

  const handleSelectProvince = (province) => {
    setProvince(province.Location);
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
          {provinces.map((item) => {
            return (
              <div
                key={item.Location}
                className={`booking-province-item ${province.Location === item.Location ? 'active' : ''}`}
                onClick={() => handleSelectProvince(item)}
              >
                {item.Location}
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default BookingProvince
import React, { useState } from 'react'
import "./BookingShowTime.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import BookingShowTimeFilter from './BookingShowTimeFilter/BookingShowTimeFilter';

const BookingShowTime = ({
    province,
    film,
    setTime,
    openToggleShowTime,
    setOpenToggleShowTime,
    setOpenToggleProvince,
    setOpenToggleFilm,
}) => {
    const [dateFilter, setDateFilter] = useState(null)

    const [theatreFilter, setTheatreFilter] = useState("Tất cả các rạp")
    const showtimes = [
        {
            theatre: {
                name: "Galaxy Hải Phòng",
                location: "Hải Phòng"
            },
            times: [
                { time: "15:45" },
                { time: "16:45" },
                { time: "17:15" },
                { time: "18:00" },
                { time: "19:00" },
                { time: "19:30" },
                { time: "20:00" },
                { time: "20:30" },
                { time: "21:00" },
                { time: "21:30" },
                { time: "22:15" }
            ]
        },
        {
            theatre: {
                name: "Galaxy Long Biên",
                location: "Hà Nội"
            },
            times: [
                { time: "15:45" },
                { time: "16:45" },
                { time: "17:15" },
                { time: "18:00" },
                { time: "19:00" },
                { time: "19:30" },
                { time: "20:00" }
            ]
        },
        {
            theatre: {
                name: "Galaxy Hai Bà Trưng",
                location: "Hà Nội"
            },
            times: [
                { time: "15:45" },
                { time: "16:45" },
                { time: "17:15" },
                { time: "18:00" },
                { time: "19:00" },
                { time: "19:30" },
                { time: "20:00" }
            ]
        },
        {
            theatre: {
                name: "Galaxy Chợ Rẫy",
                location: "Thành phố Hồ Chí Minh"
            },
            times: [
                { time: "15:45" },
                { time: "16:45" },
                { time: "17:15" },
                { time: "18:00" },
                { time: "19:00" },
                { time: "19:30" },
                { time: "20:00" },
                { time: "20:30" },
                { time: "21:00" },
                { time: "21:30" },
                { time: "22:15" }
            ]
        },
    ];

    // console.log("dateFilter: ", dateFilter);
    // console.log("theatreFilter: ", theatreFilter);

    const handleClickToggle = () => {
        setOpenToggleProvince(false);
        setOpenToggleFilm(false);
        setOpenToggleShowTime(!openToggleShowTime);
    }

    return (
        <div className='booking-showtime'>
            <div className='booking-showtime-title' onClick={() => handleClickToggle()}>
                <h2 className='title'>Chọn suất chiếu</h2>
                {openToggleShowTime
                    ? <IoIosArrowDropup className='icon' />
                    : <IoIosArrowDropdown className='icon' />
                }

            </div>
            {openToggleShowTime && province && film &&
                <div className="booking-showtime-content">
                    <BookingShowTimeFilter
                        province={province}
                        dateFilter={dateFilter}
                        setDateFilter={setDateFilter}
                        theatreFilter={theatreFilter}
                        setTheatreFilter={setTheatreFilter}
                        showtimes={showtimes}
                    />
                    <div className='showtime-theatre-list'>

                    </div>

                </div>
            }
        </div>
    )
}

export default BookingShowTime
import React, { useState } from 'react'
import "./BookingShowTime.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import BookingShowTimeFilter from './BookingShowTimeFilter/BookingShowTimeFilter';
import ShowTimeTheatreItem from './ShowTimeTheatreItem/ShowTimeTheatreItem';

const BookingShowTime = ({
    province,
    film,
    showtime,
    setShowTime,
    openToggleShowTime,
    setOpenToggleShowTime,
    setOpenToggleProvince,
    setOpenToggleFilm,
}) => {
    const [dateFilter, setDateFilter] = useState(null)

    // const [theatreFilter, setTheatreFilter] = useState(
    //     {
    //         theatre: { name: 'Tất cả các rạp', location: province },
    //         times: []
    //     })
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
                        // theatreFilter={theatreFilter}
                        // setTheatreFilter={setTheatreFilter}
                        showtimes={showtimes}
                    />
                    <ShowTimeTheatreItem
                        showtimes={showtimes}
                        showtime={showtime}
                        setShowTime={setShowTime}
                        province={province}
                    // theatreFilter={theatreFilter}
                    />

                </div>
            }
        </div>
    )
}

export default BookingShowTime
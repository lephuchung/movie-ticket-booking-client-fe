import React, { useEffect, useState } from 'react'
import "./BookingShowTime.scss"
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import BookingShowTimeFilter from './BookingShowTimeFilter/BookingShowTimeFilter';
import ShowTimeTheatreItem from './ShowTimeTheatreItem/ShowTimeTheatreItem';
import { formatTime } from '../../utils/formatTIme';

const BookingShowTime = ({
    province,
    film,
    showtime,
    setShowtime,
    showtimes,
    openToggleShowTime,
    setOpenToggleShowTime,
    setOpenToggleProvince,
    setOpenToggleFilm,
    setOpenToggleSeat,
    dates,
    dateFilter,
    setDateFilter,
}) => {

    const getShowtimesAfterNow = (showtimes) => {
        const now = new Date();

        return showtimes.filter((showtime) => {
            const startTime = new Date(showtime.StartTime);
            return startTime > now;
        });
    };

    const groupShowtimes = (showtimes) => {
        const grouped = showtimes.reduce((acc, showtime) => {
            const { ShowtimeId, TheaterId, StartTime, TheaterName } = showtime;

            let theaterGroup = acc.find((group) => group.theater.theaterId === TheaterId);
            if (!theaterGroup) {
                theaterGroup = {
                    theater: {
                        theaterId: TheaterId,
                        theaterName: TheaterName,
                    },
                    times: []
                };
                acc.push(theaterGroup);
            }

            theaterGroup.times.push({ time: StartTime, showtimeId: ShowtimeId });
            return acc;
        }, []);

        return grouped;
    };

    const handleClickToggle = () => {
        setOpenToggleProvince(false);
        setOpenToggleFilm(false);
        setOpenToggleSeat(false)
        setOpenToggleShowTime(!openToggleShowTime);
    }

    const groupedShowtimes = groupShowtimes(getShowtimesAfterNow(showtimes));

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
                        dateFilter={dateFilter}
                        setDateFilter={setDateFilter}
                        dates={dates}
                    />
                    <ShowTimeTheatreItem
                        showtimes={groupedShowtimes}
                        dateFilter={dateFilter}
                        showtime={showtime}
                        setShowtime={setShowtime}
                        setOpenToggleSeat={setOpenToggleSeat}
                        setOpenToggleShowTime={setOpenToggleShowTime}
                        province={province}
                    />

                </div>
            }
        </div>
    )
}

export default BookingShowTime
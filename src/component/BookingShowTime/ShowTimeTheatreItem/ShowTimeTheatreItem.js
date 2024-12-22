import React from 'react'
import "./ShowTimeTheatreItem.scss"
import { formatTime } from '../../../utils/formatTIme';
import { getDateFromISOTime } from '../../../utils/getDateFromIsoTIme';

const ShowTimeTheatreItem = ({
    showtimes,
    dateFilter,
    showtime,
    setOpenToggleShowTime,
    setOpenToggleSeat,
    setShowtime,
}) => {
    const handleSelectTime = (time, theatreName, showtimeId) => {
        const data = { showtimeId };
        setShowtime(data);
        setOpenToggleShowTime(false);
        setOpenToggleSeat(true);
    };

    return (
        <div className="showtimes">
            {showtimes && showtimes.map((item) => {
                return (
                    <div key={item.theater.theaterId} className="theatre-item">
                        <h3 className='theatre-name'>{item.theater.theaterName}</h3>
                        <div className='theatre-showtimes'>{item.times
                            .filter((time) => getDateFromISOTime(time.time) === dateFilter.rawDate)
                            .sort((a, b) => new Date(a.time) - new Date(b.time))
                            .map((time) => {
                                return (
                                    <button
                                        key={time}
                                        className={`
                                            time 
                                            ${showtime.time === time.time
                                                && showtime.theaterId === item.theater.theaterId
                                                ? "selected"
                                                : ""
                                            }
                                        `}
                                        onClick={() => handleSelectTime(time.time, item.theater.theaterId, time.showtimeId)}
                                    >
                                        {formatTime(time.time)}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowTimeTheatreItem
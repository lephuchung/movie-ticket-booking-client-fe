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
    const handleSelectTime = (time, theatreName) => {
        const data = { time, theatreName };
        setShowtime(data);
        setOpenToggleShowTime(false);
        setOpenToggleSeat(true);
    };

    return (
        <div className="showtimes">
            {showtimes && showtimes.map((item) => {
                return (
                    <div key={item.theater.theaterId} className="theatre-item">
                        <h3 className='theatre-name'>{item.theater.theaterId}</h3>
                        <div className='theatre-showtimes'>{item.times
                            .filter((time) => getDateFromISOTime(time.time) === dateFilter.rawDate)
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
                                        onClick={() => handleSelectTime(time.time, item.theater.theaterId)}
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
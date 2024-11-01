import React from 'react'
import "./ShowTimeTheatreItem.scss"

const ShowTimeTheatreItem = ({
    showtimes,
    province,
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
            {showtimes
                .filter((item) => item.theatre.location === province)
                .map((item) => {
                    return (
                        <div key={item.theatre.name} className="theatre-item">
                            <h3 className='theatre-name'>{item.theatre.name}</h3>
                            <div className='theatre-showtimes'>{item.times.map((time) => {
                                return (
                                    <>
                                        <button
                                            key={time}
                                            className={`
                                            time 
                                            ${showtime.time === time.time
                                                    && showtime.theatreName === item.theatre.name
                                                    ? "selected"
                                                    : ""
                                                }
                                        `}
                                            onClick={() => handleSelectTime(time.time, item.theatre.name)}
                                        >
                                            {time.time}
                                        </button>
                                    </>

                                )
                            })}</div>
                        </div>
                    )
                })}
        </div>
    )
}

export default ShowTimeTheatreItem
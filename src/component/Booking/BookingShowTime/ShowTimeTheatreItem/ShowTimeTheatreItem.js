import React, { useState } from 'react'
import "./ShowTimeTheatreItem.scss"

const ShowTimeTheatreItem = ({ showtimes, province }) => {
    const [selectedTime, setSelectedTime] = useState({ time: "", theatreName: "" });
    const handleSelectTime = (time, theatreName) => {
        const data = { time, theatreName };
        setSelectedTime(data);
    };
    console.log("check: ", showtimes[0].theatre.location);
    console.log("check 2: ", province);
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
                                            ${selectedTime.time === time.time
                                                    && selectedTime.theatreName === item.theatre.name
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
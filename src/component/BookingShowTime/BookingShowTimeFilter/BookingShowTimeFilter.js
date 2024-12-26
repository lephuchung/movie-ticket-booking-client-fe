import React, { useEffect, useState } from 'react';
import "./BookingShowTimeFilter.scss"

const BookingShowTimeFilter = ({ dateFilter, setDateFilter, dates }) => {

    return (
        <div className='booking-showtime-filter'>
            <div className="date-selector">
                {dates.map((date) => (
                    <button
                        key={date.id}
                        className={`date-item ${dateFilter?.id === date.id ? 'active' : ''}`}
                        onClick={() => setDateFilter(date)}
                    >
                        {date.day}<br />{date.date}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BookingShowTimeFilter
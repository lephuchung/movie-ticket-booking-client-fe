import React, { useEffect, useState } from 'react';
import "./BookingShowTimeFilter.scss"

const BookingShowTimeFilter = ({ province, dateFilter, setDateFilter, theatreFilter, setTheatreFilter, showtimes }) => {
    const [dates, setDates] = useState([]);
    const [theatres, setTheatres] = useState([])
    const generateDates = (numDays) => {
        const today = new Date();
        const dates = [];

        for (let i = 0; i < numDays; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
            let day;
            if (i === 0) day = "Hôm nay";
            else if (i === 1) day = "Ngày Mai"
            else day = dayNames[date.getDay()];
            dates.push({
                id: i,
                day,
                rawDate: date.toLocaleDateString("vi-VN"),
                date: date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" })
            });
        }

        return dates;
    };

    const findTheatreByLocation = (arr, province) => {
        return arr.filter(obj => obj.theatre.location === province.name);
    };

    // const AllTheatre = {
    //     theatre: { name: 'Tất cả các rạp', location: province },
    //     times: []
    // }

    useEffect(() => {
        const generatedDates = generateDates(5);
        const theatreArr = findTheatreByLocation(showtimes, province)
        // theatreArr.unshift(AllTheatre);
        setDates(generatedDates);
        setTheatres(theatreArr)
        setDateFilter(generatedDates[0])
        // setTheatreFilter(theatres[0]);
    }, [province]);

    return (
        <div className='booking-showtime-filter'>
            {/* lọc theo ngày */}
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
            {/* lọc theo rạp */}
            {/* <div className={"theatre-selector"}>
                <select
                    className='theatre-selector-box'
                    value={theatreFilter}
                    onChange={(e) => setTheatreFilter(e.target.value)}
                >
                    {theatres.map((cinema) => (
                        <option key={cinema.theatre.name} value={cinema.theatre.name}>{cinema.theatre.name}</option>
                    ))}
                </select>
            </div> */}
        </div>
    )
}

export default BookingShowTimeFilter
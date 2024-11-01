import React, { useState } from 'react';
import "./BookingSeat.scss";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Seat from './Seat/Seat';

const initialRows = [
    {
        row: "I",
        seats: [
            { id: "I1", row: "I", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "I2", row: "I", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "I3", row: "I", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "I4", row: "I", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "I5", row: "I", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "I6", row: "I", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "I7", row: "I", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "I8", row: "I", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "I9", row: "I", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "I10", row: "I", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "I11", row: "I", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "I12", row: "I", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "H",
        seats: [
            { id: "H1", row: "H", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "H2", row: "H", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "H3", row: "H", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "H4", row: "H", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "H5", row: "H", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "H6", row: "H", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "H7", row: "H", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "H8", row: "H", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "H9", row: "H", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "H10", row: "H", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "H11", row: "H", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "H12", row: "H", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "G",
        seats: [
            { id: "G1", row: "G", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "G2", row: "G", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "G3", row: "G", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "G4", row: "G", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "G5", row: "G", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "G6", row: "G", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "G7", row: "G", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "G8", row: "G", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "G9", row: "G", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "G10", row: "G", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "G11", row: "G", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "G12", row: "G", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "F",
        seats: [
            { id: "F1", row: "F", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "F2", row: "F", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "F3", row: "F", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "F4", row: "F", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "F5", row: "F", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "F6", row: "F", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "F7", row: "F", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "F8", row: "F", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "F9", row: "F", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "F10", row: "F", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "F11", row: "F", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "F12", row: "F", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "E",
        seats: [
            { id: "E1", row: "E", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "E2", row: "E", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "E3", row: "E", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "E4", row: "E", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "E5", row: "E", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "E6", row: "E", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "E7", row: "E", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "E8", row: "E", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "E9", row: "E", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "E10", row: "E", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "E11", row: "E", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "E12", row: "E", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "D",
        seats: [
            { id: "D1", row: "D", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "D2", row: "D", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "D3", row: "D", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "D4", row: "D", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "D5", row: "D", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "D6", row: "D", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "D7", row: "D", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "D8", row: "D", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "D9", row: "D", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "D10", row: "D", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "D11", row: "D", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "D12", row: "D", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "C",
        seats: [
            { id: "C1", row: "C", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "C2", row: "C", seatNumber: 2, isBooked: true, isSelected: false },
            { id: "C3", row: "C", seatNumber: 3, isBooked: true, isSelected: false },
            { id: "C4", row: "C", seatNumber: 4, isBooked: true, isSelected: false },
            { id: "C5", row: "C", seatNumber: 5, isBooked: true, isSelected: false },
            { id: "C6", row: "C", seatNumber: 6, isBooked: true, isSelected: false },
            { id: "C7", row: "C", seatNumber: 7, isBooked: true, isSelected: false },
            { id: "C8", row: "C", seatNumber: 8, isBooked: true, isSelected: false },
            { id: "C9", row: "C", seatNumber: 9, isBooked: true, isSelected: false },
            { id: "C10", row: "C", seatNumber: 10, isBooked: true, isSelected: false },
            { id: "C11", row: "C", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "C12", row: "C", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "B",
        seats: [
            { id: "B1", row: "B", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "B2", row: "B", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "B3", row: "B", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "B4", row: "B", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "B5", row: "B", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "B6", row: "B", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "B7", row: "B", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "B8", row: "B", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "B9", row: "B", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "B10", row: "B", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "B11", row: "B", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "B12", row: "B", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
    {
        row: "A",
        seats: [
            { id: "A1", row: "A", seatNumber: 1, isBooked: false, isSelected: false },
            { id: "A2", row: "A", seatNumber: 2, isBooked: false, isSelected: false },
            { id: "A3", row: "A", seatNumber: 3, isBooked: false, isSelected: false },
            { id: "A4", row: "A", seatNumber: 4, isBooked: false, isSelected: false },
            { id: "A5", row: "A", seatNumber: 5, isBooked: false, isSelected: false },
            { id: "A6", row: "A", seatNumber: 6, isBooked: false, isSelected: false },
            { id: "A7", row: "A", seatNumber: 7, isBooked: false, isSelected: false },
            { id: "A8", row: "A", seatNumber: 8, isBooked: false, isSelected: false },
            { id: "A9", row: "A", seatNumber: 9, isBooked: false, isSelected: false },
            { id: "A10", row: "A", seatNumber: 10, isBooked: false, isSelected: false },
            { id: "A11", row: "A", seatNumber: 11, isBooked: false, isSelected: false },
            { id: "A12", row: "A", seatNumber: 12, isBooked: false, isSelected: false },
        ],
    },
];

const BookingSeat = ({
    province,
    film,
    showtime,
    setSeats,
    openToggleSeat,
    setOpenToggleSeat,
    setOpenToggleShowTime,
    setOpenToggleProvince,
    setOpenToggleFilm,
}) => {
    const [rows, setRows] = useState(initialRows)

    const handleClickToggle = () => {
        setOpenToggleProvince(false);
        setOpenToggleFilm(false);
        setOpenToggleShowTime(false);
        setOpenToggleSeat(!openToggleSeat);
    };

    const handleSeatClick = (seatId) => {
        setRows((prevRows) =>
            prevRows.map((row) => ({
                ...row,
                seats: row.seats.map((seat) =>
                    seat.id === seatId && !seat.isBooked
                        ? { ...seat, isSelected: !seat.isSelected }
                        : seat
                ),
            }))
        );

        setSeats((prevSelected) => {
            if (prevSelected.includes(seatId)) {
                return prevSelected.filter((id) => id !== seatId);
            } else {
                return [...prevSelected, seatId];
            }
        });
    };

    return (
        <div className='booking-showtime'>
            <div className='booking-showtime-title' onClick={() => handleClickToggle()}>
                <h2 className='title'>Chọn ghế</h2>
                {openToggleSeat
                    ? <IoIosArrowDropup className='icon' />
                    : <IoIosArrowDropdown className='icon' />
                }

            </div>
            {openToggleSeat && province && film && showtime.time &&
                <div className="booking-seat-content">
                    {rows.map((row) => {
                        return (
                            <div className='seat-row'>
                                {
                                    row.seats.map((seat) => {
                                        return (
                                            <Seat
                                                key={seat.id}
                                                seat={seat}
                                                onClick={handleSeatClick} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                    <div className="screen">Màn hình</div>
                    <div className='notice'>
                        <div className='notice-item'>
                            <div className='seat available'>A0</div>
                            <label className='notice-label'>Ghế có thể chọn</label>
                        </div>
                        <div className='notice-item'>
                            <div className='seat selected' >A0</div>
                            <label className='notice-label'>Ghế đang chọn</label>
                        </div>
                        <div className='notice-item'>
                            <div className='seat booked' >A0</div>
                            <label className='notice-label'>Ghế đã bán</label>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default BookingSeat;
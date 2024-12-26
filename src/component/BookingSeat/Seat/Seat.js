import React from 'react';
import "./Seat.scss";

const Seat = ({ seat, onClick }) => {
    const getSeatClass = () => {
        if (seat.isBooked) return 'seat booked';
        if (seat.isSelected) return 'seat selected';
        return 'seat available';
    };

    return (
        <div className={getSeatClass()} onClick={() => !seat.isBooked && onClick(seat.id)}>
            {seat.seatNumber}
        </div>
    );
};

export default Seat;
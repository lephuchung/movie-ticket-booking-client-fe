import React from 'react'
import './TicketDetail.scss'
import { CgCloseO } from "react-icons/cg";

const TicketDetail = ({ ticket, onClose }) => {
    const handlePayment = () => {
        console.log('hehe');
    }
    return (
        <div className="ticket-detail-overlay">
            <div className="ticket-detail-container">
                <button className="ticket-detail-close-button" onClick={onClose}>
                    <CgCloseO />
                </button>
                <h2>Chi tiết vé xem phim</h2>
                <p><strong>Phim:</strong> {ticket.filmName}</p>
                <p><strong>Suất chiếu</strong> {ticket.seatNumber}</p>
                <p><strong>Phòng chiếu:</strong> {ticket.room}</p>
                <p><strong>Rạp:</strong> {ticket.theatre}</p>
                <p><strong>Giá tiền:</strong> {ticket.price}</p>
                <p><strong>Trạng thái:</strong> {ticket.paymentStatus}</p>
                <p><strong>Thời gian đặt:</strong> {ticket.bookingTime}</p>
                {ticket.paymentStatus === 'Chưa thanh toán' && (
                    <button className="ticket-detail-payment-button" onClick={handlePayment}>
                        Thanh toán
                    </button>
                )}
            </div>
        </div>
    );
}

export default TicketDetail
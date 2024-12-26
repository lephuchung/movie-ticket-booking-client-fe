import React from 'react'
import './TicketDetail.scss'
import { CgCloseO } from "react-icons/cg";
import { getPaymentStatusTranslation } from '../../language/translatePaymentStatus';
import { getDateHourMinuteFromISOTime } from '../../utils/getDayHourMinuteFromIsoTime';

const TicketDetail = ({ ticket, onClose }) => {
    const handlePayment = () => {
        console.log('hehe');
    }
    console.log("check ticket.paymentStatus: ", ticket.PaymentStatus);

    return (
        <div className="ticket-detail-overlay">
            <div className="ticket-detail-container">
                <button className="ticket-detail-close-button" onClick={onClose}>
                    <CgCloseO />
                </button>
                <h2>Chi tiết vé xem phim</h2>
                <p><strong>Phim:</strong> {ticket.MovieTitle}</p>
                <p><strong>Suất chiếu</strong> {getDateHourMinuteFromISOTime(ticket.Showtime)}</p>
                <p><strong>Ghế</strong> {ticket.SeatNumber}</p>
                <p><strong>Phòng chiếu</strong> {ticket.RoomName}</p>
                <p><strong>Rạp</strong> {ticket.TheaterName}</p>
                <p><strong>Giá tiền</strong> {ticket.TotalPrice.toLocaleString()} VNĐ</p>
                <p><strong>Trạng thái</strong> {getPaymentStatusTranslation(ticket.PaymentStatus)}</p>
                <p><strong>Thời gian đặt:</strong> {getDateHourMinuteFromISOTime(ticket.BookingTime)}</p>
                {ticket.PaymentStatus === 'pending' && (
                    <button className="ticket-detail-payment-button" onClick={handlePayment}>
                        Thanh toán
                    </button>
                )}
            </div>
        </div>
    );
}

export default TicketDetail
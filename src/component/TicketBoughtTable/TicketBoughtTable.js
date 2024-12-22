import React, { useState } from 'react'
import "./TicketBoughtTable.scss"
import TicketDetail from '../TicketDetail/TicketDetail';
import { getDateTimeFromISOTime } from '../../utils/getDateTimeFromIsoTime';
import { getDateHourMinuteFromISOTime } from '../../utils/getDayHourMinuteFromIsoTime';
import { getPaymentStatusTranslation } from '../../language/translatePaymentStatus';
const TicketBoughtTable = ({ tickets }) => {
    const [ticketSelection, setTicketSelection] = useState(null);
    const [openPopupTicket, setOpenPopupTicket] = useState(false);
    const handleOnClickTicket = (ticket) => {
        setTicketSelection(ticket);
        setOpenPopupTicket(true);
    }
    const handleClosePopupTicket = () => {
        setTicketSelection(null);
        setOpenPopupTicket(false);
    }
    return (
        <div className="ticket-table-container">
            <table className="ticket-table">
                <thead>
                    <tr className='table-head-row'>
                        <th>Film</th>
                        <th>Showtime</th>
                        <th>Seat</th>
                        <th>Room</th>
                        <th>Theatre</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket, index) => (
                        <tr className='table-body-row' key={index} onClick={() => handleOnClickTicket(ticket)}>
                            <td>{ticket.MovieTitle}</td>
                            <td>{getDateHourMinuteFromISOTime(ticket.Showtime)}</td>
                            <td>{ticket.SeatNumber}</td>
                            <td>{ticket.RoomName}</td>
                            <td>{ticket.TheaterName}</td>
                            <td>{getPaymentStatusTranslation(ticket.PaymentStatus)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {openPopupTicket && ticketSelection &&
                <TicketDetail ticket={ticketSelection} onClose={handleClosePopupTicket} />
            }
        </div>
    );
}

export default TicketBoughtTable
import React from 'react'
import "./TicketBoughtTable.scss"
const TicketBoughtTable = ({ tickets }) => {
    return (
        <div className="ticket-table-container">
            <table className="ticket-table">
                <thead>
                    <tr>
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
                        <tr key={index}>
                            <td>{ticket.filmName}</td>
                            <td>{ticket.showtime}</td>
                            <td>{ticket.seatNumber}</td>
                            <td>{ticket.room}</td>
                            <td>{ticket.theatre}</td>
                            <td>{ticket.paymentStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TicketBoughtTable
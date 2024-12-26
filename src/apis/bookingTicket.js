import axios from 'axios';
import { toast } from 'react-toastify';
const API_URL = process.env.REACT_APP_API_URL;
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

export const BookingTicket = async (data) => {
    axios.post(`${API_URL}${API_PREFIX}/bookings`, data)
        .then(response => {
            console.log('Success:', response.data);
            toast.success("Đặt vé thành công, vui lòng thanh toán trong vòng 10 phút để hoàn tất");
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            if (error.response) {
                toast.error("Đặt vé thất bại, " + (error.response.data.message || 'Có lỗi xảy ra.') + " " + (error.response.data.occupiedSeats || ''));
            } else {
                toast.error("Đặt vé thất bại, " + (error.message || 'Có lỗi xảy ra.'));
            }
        });
};
import React, { useEffect, useState } from 'react'
import "./Payment.scss"
import { QRCodeCanvas } from 'qrcode.react';
import QRcode from "./QRCode.jpg"
import { Base64 } from 'js-base64';
import { useNavigate, useParams } from 'react-router';
import { fetchShowtimeDetail } from '../../apis/fetchShowtimeDetail';
import { fetchTheaterDetail } from '../../apis/ferchTheaterDetail';
import { fetchRoomDetail } from '../../apis/fetchRoomDetail';
import { fetchFilmById } from '../../apis/fetchFilmById';
import { getDateHourMinuteFromISOTime } from '../../utils/getDayHourMinuteFromIsoTime';

const Payment = () => {

    const navigate = useNavigate();
    const { encodedData } = useParams();
    const [decodedData, setDecodedData] = useState(null);
    const [showtimeSelected, setShowtimeSelected] = useState(null);
    const [movie, setMovie] = useState(null);
    const [theater, setTheater] = useState(null);
    const [room, setRoom] = useState(null);
    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    console.log("check decodedData: ", decodedData);

    useEffect(() => {
        try {
            const decoded = JSON.parse(Base64.decode(encodedData));
            setDecodedData(decoded);
        } catch (error) {
            console.error("Giải mã dữ liệu thất bại:", error);
            navigate("/");
        }
    }, [encodedData, navigate])

    const handleClickPaid = () => {
        navigate('/');
    }

    const getFilmDetail = async (movieId) => {
        if (!movieId) return;
        const movieFetch = await fetchFilmById(movieId);
        setMovie(movieFetch);
    }

    const getShowtimeDetail = async (showtimeId) => {
        if (!showtimeId) return;
        const showtimeFetch = await fetchShowtimeDetail(showtimeId);
        setShowtimeSelected(showtimeFetch);
    };

    const getRoomAndTheater = async (showtimeSelected) => {
        if (!showtimeSelected) return;
        const roomFetch = await fetchRoomDetail(showtimeSelected.RoomId);
        setRoom(roomFetch);
        const theaterFetch = await fetchTheaterDetail(showtimeSelected.TheaterId);
        setTheater(theaterFetch);
    };

    useEffect(() => {
        getShowtimeDetail(decodedData?.showtimeId);
    }, [decodedData]);

    useEffect(() => {
        if (showtimeSelected) {
            getRoomAndTheater(showtimeSelected);
            getFilmDetail(showtimeSelected.MovieId)
        }
    }, [showtimeSelected])

    return (
        <div className="payment-container">
            <div className="qr-code">
                <h2>Quét mã để thanh toán</h2>
                <img src={QRcode} />
                <p>Chuyển khoản với nội dung được viết sẵn bên cạnh để hoàn tất thanh toán.</p>
            </div>

            <div className="order-info">
                <h2>Thông tin đơn hàng</h2>
                <p><strong>Phim chiếu:</strong> {movie?.Title}</p>
                <p><strong>Rạp phim:</strong> {theater?.Name}</p>
                <p><strong>Phòng chiếu:</strong> {room?.Name}</p>
                <p><strong>Suất chiếu:</strong> {getDateHourMinuteFromISOTime(showtimeSelected?.StartTime)}</p>
                <p><strong>Tổng số ghế:</strong> {decodedData?.seatNumbers?.length}</p>
                <p><strong>Ghế:</strong> {decodedData?.seatNumbers?.join(", ")}</p>
                <p><strong>Tên khách hàng:</strong> {userData?.Name}</p>
                <p><strong>Tổng tiền:</strong> {decodedData?.seatNumbers.length * showtimeSelected?.Price}</p>
                <p><strong>Nội dung chuyển tiền:</strong> {userData?.UserId}&{showtimeSelected?.ShowtimeId}&{decodedData?.seatNumbers?.join("&")}&{room?.RoomId}&{theater?.TheaterId}</p>
                <button className='payment-button' onClick={() => { handleClickPaid() }}>Đã thanh toán</button>
            </div>



        </div>
    );
}

export default Payment
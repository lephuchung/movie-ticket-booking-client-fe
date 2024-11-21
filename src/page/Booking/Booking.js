import React, { useEffect, useState } from 'react'
import BookingProvince from '../../component/BookingProvince/BookingProvince'
import BookingFilm from '../../component/BookingFilm/BookingFilm';
import "./Booking.scss"
import BookingShowTime from '../../component/BookingShowTime/BookingShowTime';
import BookingSeat from '../../component/BookingSeat/BookingSeat';
import BookingTicketSummary from '../../component/BookingTicketSummary/BookingTicketSummary';
import { fetchProvince } from '../../apis/fetchProvince';
import { fetchFilmInProvince } from '../../apis/fetchFilmInProvince';
import { fetchShowtimeOfFilmInProvince } from '../../apis/fetchShowtimeOfFilmInProvince';

const Booking = () => {
  const [province, setProvince] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [film, setFilm] = useState("");
  const [films, setFilms] = useState([]);
  const [showtime, setShowtime] = useState({ time: "", theatreName: "" });
  const [showtimes, setShowtimes] = useState([]);
  const [seats, setSeats] = useState([]);
  const [dateFilter, setDateFilter] = useState(null)

  const [openToggleProvince, setOpenToggleProvince] = useState(true)
  const [openToggleFilm, setOpenToggleFilm] = useState(false)
  const [openToggleShowTime, setOpenToggleShowTime] = useState(false);
  const [openToggleSeat, setOpenToggleSeat] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getInfor = async () => {
    try {
      const provinceList = await fetchProvince();
      setProvinces(provinceList);
      if (province) {
        const filmList = await fetchFilmInProvince(province);
        setFilms(filmList);
      }
      if (province && film) {
        const showtimeList = await fetchShowtimeOfFilmInProvince(film.Title, province);
        setShowtimes(showtimeList);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [dates, setDates] = useState([]);

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

  useEffect(() => {
    const generatedDates = generateDates(3);
    setDates(generatedDates);
    setDateFilter(generatedDates[0]);
  }, [province]);


  useEffect(() => {
    getInfor();
  }, [province, film, showtime]);

  console.log("check: ", showtimes);

  const data = {
    province,
    film,
    showtime,
    seats,
  }
  // console.log("check data: ", data);

  return (
    <div className='booking'>
      <div className='booking-selection'>
        {provinces
          ? <BookingProvince
            province={province}
            setProvince={setProvince}
            provinces={provinces}
            openToggleProvince={openToggleProvince}
            setOpenToggleProvince={setOpenToggleProvince}
            setOpenToggleFilm={setOpenToggleFilm}
            setOpenToggleShowTime={setOpenToggleShowTime}
            setOpenToggleSeat={setOpenToggleSeat}
          />
          : <div></div>
        }
        <BookingFilm
          province={province}
          setFilm={setFilm}
          films={films}
          openToggleFilm={openToggleFilm}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleSeat={setOpenToggleSeat}

        />
        <BookingShowTime
          province={province}
          film={film}
          showtime={showtime}
          setShowtime={setShowtime}
          showtimes={showtimes}
          dates={dates}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          openToggleShowTime={openToggleShowTime}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
          setOpenToggleSeat={setOpenToggleSeat}
        />
        <BookingSeat
          province={province}
          film={film}
          showtime={showtime}
          setSeats={setSeats}
          showtimes={showtimes}
          openToggleSeat={openToggleSeat}
          setOpenToggleSeat={setOpenToggleSeat}
          setOpenToggleShowTime={setOpenToggleShowTime}
          setOpenToggleProvince={setOpenToggleProvince}
          setOpenToggleFilm={setOpenToggleFilm}
        />
      </div>
      <div className='booking-result'>
        <BookingTicketSummary
          film={film}
          showtime={showtime}
          seats={seats}
        />
      </div>
    </div>
  )
}

export default Booking
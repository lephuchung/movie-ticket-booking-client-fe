import React, { useEffect } from 'react'
import { useState } from 'react';
import './FilmDetail.scss';
import emptyPoster from './img-blank.bb695736.svg';
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import MovieListColumn from '../../component/MovieListColumn/MovieListColumn';
import { useNavigate, useParams } from 'react-router';
import { fetchFilmDetail } from '../../apis/fetchFilmDetail';
import { getDateFromISOTime } from '../../utils/getDateFromIsoTIme';
import { fetchNowShowingMovies } from '../../apis/fetchNowShowing';
import { getGenreTranslation } from '../../language/translateCategory';
import { fetchShowtimeOfFilmInProvince } from '../../apis/fetchShowtimeOfFilmInProvince';
import { fetchShowtimeOfFilm } from '../../apis/fetchShowtimeOfFilm';

const FilmDetail = () => {
  const navigate = useNavigate();

  const defaultFilm = {
    MovieId: "MID99999",
    Title: "Không xác định",
    Description: "Không xác định",
    Genre: "Không xác định",
    ReleaseDate: "2019-07-18T17:00:00.000Z",
    Rating: 10,
    Duration: 120,
    Director: "Không xác định",
    PosterUrl: emptyPoster,
  }
  const [film, setFilm] = useState(defaultFilm);
  const [filmStatus, setFilmStatus] = useState(false);
  const [moviesNowShowing, setMoviesNowShowing] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { title } = useParams()

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleOnclickBooking = () => {
    navigate(`/booking`)
  }

  const getMoviesDetail = async (title) => {
    try {
      const filmDetail = await fetchFilmDetail(title);
      if (filmDetail)
        setFilm(filmDetail);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getMoviesNowShowing = async () => {
    try {
      const nowShowingMovies = await fetchNowShowingMovies();
      setMoviesNowShowing(nowShowingMovies);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getFilmStatus = async (film) => {
    const showtimeFetch = await fetchShowtimeOfFilm(film.MovieId);

    if (showtimeFetch && showtimeFetch.length) {
      setFilmStatus(true);
    }
  }

  useEffect(() => {
    getMoviesDetail(title);
  }, [title]);

  useEffect(() => {
    getFilmStatus(film)
  }, [film]);

  useEffect(() => {
    getMoviesNowShowing();
  }, []);

  return (
    <div className='film-detail-container'>
      <div className="film-detail-thumbnail" onClick={openPopup}>
        <img src={film.PosterUrl ? film.PosterUrl : emptyPoster} alt="Video Thumbnail" />
        <div className="film-detail-thumbnail-play-button"><AiFillPlayCircle /></div>
      </div>
      {isOpen && (
        <div className="film-detail-popup-vid" onClick={closePopup}>
          <div className="film-detail-popup-vid-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/ZZvIVRQ4E7I?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className='film-detail-page-content'>
        <div className='film-detail-main-content'>
          <div className='film-detail-general-information'>
            <div className='film-detail-poster'>
              <img src={film.PosterUrl ? film.PosterUrl : emptyPoster} alt="Poster" />
            </div>
            <div className='film-detail-information'>
              <h1 className='film-detail-title'>{film.Title}</h1>
              <div className="film-detail-duration">
                <FaRegClock className='film-detail-duration-icon' />
                <span>
                  {film.Duration} Phút
                </span>
                <FaRegCalendarAlt className='film-detail-duration-icon' />
                <span>
                  {getDateFromISOTime(film.ReleaseDate)}
                </span>
              </div>
              <div className="film-detail-rating">
                <FaRegStar className='film-detail-rating-icon' />
                <span>{film.Rating}</span>
              </div>
              <p>Tình trạng: {filmStatus ? "Phim đang chiếu" : "Phim tạm ngừng chiếu"}</p>
              <p>Nhà sản xuất: Đang cập nhật</p>
              <p>Thể loại: {getGenreTranslation(film.Genre)}</p>
              <p>Đạo diễn: {film.Director}</p>
            </div>
          </div>
          <div className='film-description'>
            <h2 className='film-description-title'>Nội dung phim</h2>
            <div className='film-description-content'>
              {film.Description ? film.Description : "Nội dung phim đang cập nhật"}
            </div>
          </div>
          <button className='film-detail-booking-button' onClick={() => { handleOnclickBooking() }}>
            <span>
              Đặt vé ngay
            </span>
          </button>
        </div>
        {
          moviesNowShowing.length &&
          <div className='film-detail-now-play-list'>
            <MovieListColumn genre={"Phim đang chiếu"} movies={moviesNowShowing} all={true} />
          </div>
        }
      </div>

    </div>
  )
}

export default FilmDetail

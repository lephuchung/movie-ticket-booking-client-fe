import React from 'react'
import { useState } from 'react';
import './FilmDetail.scss';
import thumbnail from './image2.png';
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  movies,
} from '../Data';
import MovieListColumn from '../../component/MovieListColumn/MovieListColumn';
// import { useParams } from 'react-router';

const FilmDetail = () => {

  const [isOpen, setIsOpen] = useState(false);
  //const { id } = useParams()
  //console.log("id: ", id);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className='film-detail-container'>
      <div className="thumbnail" onClick={openPopup}>
        <img src={thumbnail} alt="Video Thumbnail" />
        <div className="play-button"><AiFillPlayCircle /></div>
      </div>
      {isOpen && (
        <div className="popup_vid" onClick={closePopup}>
          <div className="popup_vid-content" onClick={(e) => e.stopPropagation()}>
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
          <div className='film-general-information'>
            <div className='film-poster'>
              <img src={thumbnail} alt="Poster" />
            </div>
            <div className='film-information'>
              <h1 className='film-title'>Học Viện Anh Hùng: You're Next</h1>
              <div className="film-duration">
                <FaRegClock className='icon' />
                <span>
                  110 Phút
                </span>
                <FaRegCalendarAlt className='icon' />
                <span>
                  07/11/2024
                </span>
              </div>
              <div className="film-rating">
                <FaRegStar className='icon' />
                <span>9.4</span>
              </div>
              <p>Tình trạng: Phim đang chiếu</p>
              <p>Nhà sản xuất: Đang cập nhật</p>
              <p>Thể loại: Hoạt Hình</p>
              <p>Đạo diễn: Okamura Tensai</p>
            </div>
          </div>
          <div className='film-description'>
            <h2 className='film-description-title'>Nội dung phim</h2>
            <div className='film-description-content'>
              Không ai biết về bí mật của Torako - rằng cô từng là người từng một thời làm giang hồ.
              Đối với các bạn cùng lớp, thì cô ấy là một nữ sinh hoàn hảo.
              Nhưng cuộc sống học đường của Torako dần bị xáo trộn khi Nokotan, một nữ sinh chuyển trường với đôi gạc
              theo đúng nghĩa đen và có một khứu giác kỳ lạ, nên cô ấy có thể "đánh hơi" được quá khứ của Torako.
              Dù là trường học hay sở thú, thì Nokotan vẫn luôn là "cô nai" kỳ lạ, làm đảo lộn mọi nhận thức thông thường của Torako.
              Liệu Torako là một cô gái, hay là một con nai hoặc thậm chí là cả hai? Cùng đón xem nhé!
            </div>
          </div>
          <button className='booking-button'>
            <span>
              Đặt vé ngay
            </span>
          </button>
        </div>

        <div className='film-list'>
          <MovieListColumn genre={"Phim đang chiếu"} movies={movies} />

        </div>
      </div>

    </div>
  )
}

export default FilmDetail

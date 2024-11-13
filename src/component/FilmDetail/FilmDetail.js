import React from 'react'
import { useState } from 'react';
import './FilmDetail.scss';
import thumbnail from './shikanoko.jpg';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaGripLinesVertical } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";

const FilmDetail = () => {

  const [isOpen, setIsOpen] = useState(false);


  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

return (
  <div>
      <div>FilmDetail</div>
      <div className='detail_container'>
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      <div className='poster_movie'>
        <img src={thumbnail} alt="Poster" />
      </div>
      <div className='movie_detail'>
        <div className='movie_til'>
          My Deer Friend Nokotan
        </div>
        <div className='movie_le'>
          190 phút
        </div>
        <div className='movie_date'>
        <FaRegCalendarAlt />07/08/25
        </div>
        <div className='movie_rating'>
        <FaStar style={{ color: 'gold' }}/>9.0
        </div>
        <div className='movie_nation'>
          Quốc gia: Nhật Bản
        </div>
        <div className='movie_producer'>
          Nhà sản xuất: Wit Studio
        </div>
        <div className='movie_type'>
          Thê loại
        </div>
        <div className='movie_director'>
          Đạo diễn : Oota Masahiko
        </div>
      </div>
      </div>
      <div className='movie_detail'>
        <div className='page_idex'>
        <FaGripLinesVertical style={{ color: '#034EA2'}}/>  Nội Dung Phim
        </div>
        <div className='page_text'>
        Không ai biết về bí mật của Torako - rằng cô từng là người từng một thời làm giang hồ. 
        Đối với các bạn cùng lớp, thì cô ấy là một nữ sinh hoàn hảo. 
        Nhưng cuộc sống học đường của Torako dần bị xáo trộn khi Nokotan, một nữ sinh chuyển trường với đôi gạc 
        theo đúng nghĩa đen và có một khứu giác kỳ lạ, nên cô ấy có thể "đánh hơi" được quá khứ của Torako. 
        Dù là trường học hay sở thú, thì Nokotan vẫn luôn là "cô nai" kỳ lạ, làm đảo lộn mọi nhận thức thông thường của Torako. 
        Liệu Torako là một cô gái, hay là một con nai hoặc thậm chí là cả hai? Cùng đón xem nhé!
        </div>
      </div>
      
  </div>
  )
}

export default FilmDetail
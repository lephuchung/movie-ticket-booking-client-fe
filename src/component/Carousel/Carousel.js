import React, { useEffect, useState } from "react";
import './Carousel.scss';

function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => { slideRight(); }, 2500)
    })

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);

    }
    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
    return (
        <div className="carousel" onMouseEnter={() => { setAutoPlay(false); clearTimeout(timeOut); }} onMouseLeave={() => { setAutoPlay(true) }}>
            <div className="carousel_wrapper">
                {images.map((image, index) => {
                    return (
                        <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                            <img src={image.image} />
                        </div>
                    )
                })}
                <div className="carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
                <div className="carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>
                <div className="carousel_pagination">
                    {images.map((_, index) => {
                        return (
                            <div key={index} className={index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
                                onClick={() => setCurrent(index)}
                            ></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel
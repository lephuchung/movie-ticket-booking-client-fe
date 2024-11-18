import React from 'react'
// import poster from "./image.png"
import "./FilmCardSmall.scss"
import { Link } from 'react-router-dom'

const FilmCardSmall = ({ film }) => {

    // const film = {
    //     title: "Venom: Kèo Cuối",
    //     rating: "8.5/10",
    //     poster: "https://cdn.galaxycine.vn/media/2024/10/30/the-paradise-of-thorns-1_1730262436681.jpg"
    // }

    return (
        <Link to={`/film/${film.Title}`} className='film-card-small-link'>
            <div className='film-card-small'>
                <img src={film?.PosterUrl} alt="" className='film-card-small-poster' />
                <div className='film-card-small-information'>
                    <span className='film-card-small-title'>{film.Title}</span>
                    <span className='film-card-small-rating'>{film.Rating}/10</span>
                </div>
            </div>
        </Link>
    )
}

export default FilmCardSmall
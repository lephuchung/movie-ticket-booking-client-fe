import React from 'react'
// import poster from "./image.png"
import "./FilmCard.scss"
import { Link } from 'react-router-dom'

const FilmCard = ({ film }) => {

    // const film = {
    //     title: "Venom: Kèo Cuối",
    //     rating: "8.5/10",
    //     poster: "https://cdn.galaxycine.vn/media/2024/10/30/the-paradise-of-thorns-1_1730262436681.jpg"
    // }

    return (
        <Link to={`/film/${film.Title}`} className='film-card-link'>
            <div className='film-card'>
                <span className='film-card-rating'>{film.Rating}/10</span>
                <img src={film?.PosterUrl} alt="" className='film-card-poster' />
                <span className='film-card-title'>{film.Title}</span>
            </div>
        </Link>

    )
}

export default FilmCard
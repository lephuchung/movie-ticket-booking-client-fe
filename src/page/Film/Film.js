import React, { useEffect, useState } from 'react'
import "./Film.scss"
import MovieList from '../../component/MovieList/MovieList'
import { fetchNowShowingMovies } from '../../apis/fetchNowShowing'

const Film = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const moviesList = await fetchNowShowingMovies();
      setMovies(moviesList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className='film-page-container'>
      <MovieList genre={"Danh sách phim"} movies={movies} all={true} />
    </div>
  )
}

export default Film
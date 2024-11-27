import React, { useEffect, useState } from 'react'
import "./CategoryDetail.scss"
import { useParams } from 'react-router';
import MovieList from '../../component/MovieList/MovieList';
import { fetchMoviesByGenre } from '../../apis/fetchMoviesByGenre';

const CategoryDetail = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const categoryFilms = await fetchMoviesByGenre(genre);
      setMovies(categoryFilms);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  // console.log("categoryName: ", categoryName);
  return (
    <div className='category-detail-page-container'>
      <MovieList genre={genre} movies={movies} all={true} />
    </div>
  )
}

export default CategoryDetail
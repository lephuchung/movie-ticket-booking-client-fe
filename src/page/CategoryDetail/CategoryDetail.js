import React, { useEffect, useState } from 'react'
import "./CategoryDetail.scss"
import { useParams } from 'react-router';
import MovieList from '../../component/MovieList/MovieList';
import { fetchMoviesByGenre } from '../../apis/fetchMoviesByGenre';
import SearchBar from '../../component/SearchBar/SearchBar';

const CategoryDetail = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='category-detail-page-container'>
      <SearchBar onSearch={setSearchInput} />
      <div className='category-detail-page-main-content'>
        {loading ? (
          <div>Đang tải...</div>
        ) : error ? (
          <div>Lỗi: {error}</div>
        ) : filteredMovies.length > 0 ? (
          <MovieList genre={genre} movies={filteredMovies} all={true} />
        ) : (
          <div>Không tìm thấy phim nào phù hợp.</div>
        )}
      </div>
    </div>
  )
}

export default CategoryDetail
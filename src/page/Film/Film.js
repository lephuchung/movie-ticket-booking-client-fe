import React, { useEffect, useState } from 'react'
import "./Film.scss"
import MovieList from '../../component/MovieList/MovieList'
import { fetchAllFilm } from '../../apis/fetchAllFilm'
import SearchBar from '../../component/SearchBar/SearchBar'

const Film = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const moviesList = await fetchAllFilm();
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

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='film-page-container'>
      <SearchBar onSearch={setSearchInput} />
      <div className='film-page-main-content'>
        {loading ? (
          <div>Đang tải...</div>
        ) : error ? (
          <div>Lỗi: {error}</div>
        ) : filteredMovies.length > 0 ? (
          <MovieList genre="Danh sách phim" movies={filteredMovies} all={true} />
        ) : (
          <div>Không tìm thấy phim nào phù hợp.</div>
        )}
      </div>

    </div>
  )
}

export default Film
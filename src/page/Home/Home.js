import React, { useEffect, useState } from 'react';
import './Home.scss';
import { movie } from '../Data';
import Carousel from '../../component/Carousel/Carousel';
import MovieList from '../../component/MovieList/MovieList';
import MovieListColumn from '../../component/MovieListColumn/MovieListColumn';
import useMediaQuery from '../../customHook/useMediaQuery';
import { fetchNowShowingMovies } from '../../apis/fetchNowShowing';
import { fetchMoviesByGenre } from '../../apis/fetchMoviesByGenre';

const genres = [
  { key: "Animation", label: "Animation" },
  { key: "Action", label: "Action" },
  { key: "Adventure", label: "Adventure" },
  { key: "Sci-Fi", label: "Sci-Fi" },
  { key: "Thriller", label: "Thriller" },
  { key: "Horror", label: "Horror" },
  { key: "Romantic", label: "Romantic" },
  { key: "Comedy", label: "Comedy" },
  { key: "Drama", label: "Drama" }
];

const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width: 360px)');
  const MovieListComponent = isSmallScreen ? MovieListColumn : MovieList;

  const [movies, setMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      // Fetch "Now Showing" movies
      const nowShowingMovies = await fetchNowShowingMovies();
      if (nowShowingMovies) setMovies(nowShowingMovies);

      // Fetch movies by genre
      const genreData = await Promise.all(
        genres.map(async (genre) => {
          const moviesByGenre = await fetchMoviesByGenre(genre.key);
          return { [genre.key]: moviesByGenre };
        })
      );

      // Combine fetched genre movies into an object
      setGenreMovies(Object.assign({}, ...genreData));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='home'>
      <Carousel images={movie} />
      <div className='home-film-list-area'>
        {movies.length > 0 && (
          <MovieListComponent genre={"Now showing"} movies={movies} all={true} />
        )}
        {genres.map(({ key, label }) => (
          genreMovies[key]?.length > 0 && (
            <MovieListComponent key={key} genre={label} movies={genreMovies[key]} />
          )
        ))}
      </div>
    </div>
  );
};

export default Home;
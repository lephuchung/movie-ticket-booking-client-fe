import React, { useEffect, useState } from 'react'
import './Home.scss';
import {
  movie,
  movies,
  moviesAction,
  moviesHumour
} from '../Data';
import Carousel from '../../component/Carousel/Carousel';
import MovieList from '../../component/MovieList/MovieList';
import MovieListColumn from '../../component/MovieListColumn/MovieListColumn';
import useMediaQuery from '../../customHook/useMediaQuery';
import { fetchNowShowingMovies } from '../../apis/fetchNowShowing';
import { fetchMoviesByGenre } from '../../apis/fetchMoviesByGenre';


const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width: 360px)');
  const MovieListComponent = isSmallScreen ? MovieListColumn : MovieList;
  const [movies, setMovies] = useState([]);
  const [moviesAction, setMoviesAction] = useState([])
  const [moviesAnimation, setMoviesAnimation] = useState([])
  const [moviesScifi, setMoviesScifi] = useState([])
  const [moviesHorror, setMoviesHorror] = useState([])
  const [moviesRomance, setMoviesRomance] = useState([])
  const [moviesThriller, setMoviesThriller] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const nowShowingMovies = await fetchNowShowingMovies();
      setMovies(nowShowingMovies);
      const actionMovies = await fetchMoviesByGenre("Action")
      setMoviesAction(actionMovies);
      const animationMovies = await fetchMoviesByGenre("Animation")
      setMoviesAnimation(animationMovies);
      const scifiMovies = await fetchMoviesByGenre("Sci-Fi")
      setMoviesScifi(scifiMovies);
      const thrillerMovies = await fetchMoviesByGenre("Thriller")
      setMoviesThriller(thrillerMovies);
      const horrorMovies = await fetchMoviesByGenre("Horror")
      setMoviesHorror(horrorMovies);
      const romanceMovies = await fetchMoviesByGenre("Romantic")
      setMoviesRomance(romanceMovies);
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
    <div className='home'>
      <Carousel images={movie} />
      <div className='home-film-list-area'>
        {movies
          ? <MovieListComponent genre={"Now showing"} movies={movies} all={true} />
          : <div></div>

        }
        {moviesAnimation.length
          ? <MovieListComponent genre={"Animation"} movies={moviesAnimation} />
          : <div></div>

        }
        {moviesAction.length
          ? <MovieListComponent genre={"Action"} movies={moviesAction} />
          : <div></div>
        }
        {moviesScifi.length
          ? <MovieListComponent genre={"Sci-Fi"} movies={moviesScifi} />
          : <div></div>
        }
        {moviesThriller.length
          ? <MovieListComponent genre={"Thriller"} movies={moviesThriller} />
          : <div></div>
        }
        {moviesHorror.length
          ? <MovieListComponent genre={"Horror"} movies={moviesHorror} />
          : <div></div>
        }
        {moviesRomance.length
          ? <MovieListComponent genre={"Romantic"} movies={moviesRomance} />
          : <div></div>
        }
      </div>
    </div>
  )
}

export default Home
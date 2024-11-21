import { fetchData } from '../customHook/callApi';

export const fetchMoviesByGenre = async (genre) => {
    return fetchData(`/movies/now_showing/${genre}`)
};
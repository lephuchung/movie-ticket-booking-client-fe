import { fetchData } from '../customHook/callApi';

export const fetchShowtimeOfFilm = async (movieId) => {
    return fetchData(`/showtimes/${movieId}/next-three-days`);
};

import { fetchData } from '../customHook/callApi';

export const fetchShowtimeDetail = async (showtimeId) => {
    return fetchData(`/showtimes/${showtimeId}}`);
};

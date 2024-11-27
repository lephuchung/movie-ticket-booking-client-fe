import { fetchData } from '../customHook/callApi';

export const fetchFilmDetail = async (title) => {
    return fetchData(`/movies/details/${title}`);
};
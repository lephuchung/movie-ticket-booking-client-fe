import { fetchData } from '../customHook/callApi';

export const fetchAllFilm = async () => {
    return fetchData("/movies/");
};
import { fetchData } from '../customHook/callApi';

export const fetchFilmById = async (id) => {
    return fetchData(`/movies/${id}`);
};
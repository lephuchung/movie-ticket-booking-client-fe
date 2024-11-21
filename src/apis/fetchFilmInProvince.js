import { fetchData } from '../customHook/callApi';

export const fetchFilmInProvince = async (province) => {
    return fetchData(`/movies/now_showing/location/${province}`);
};
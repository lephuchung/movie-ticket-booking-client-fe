import { fetchData } from '../customHook/callApi';

export const fetchFilmInProvince = async (province) => {
    return fetchData(`/movies/currently-showing-in-three-day/location/${province}`);
};
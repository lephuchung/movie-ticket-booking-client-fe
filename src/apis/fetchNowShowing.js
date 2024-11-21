import { fetchData } from '../customHook/callApi';

export const fetchNowShowingMovies = async () => {
    return fetchData("/movies/now_showing");
};
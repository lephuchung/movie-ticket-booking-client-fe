import { fetchData } from '../customHook/callApi';

export const fetchNowShowingMovies = async () => {
    return fetchData("/movies/currently-showing-in-three-day");
};
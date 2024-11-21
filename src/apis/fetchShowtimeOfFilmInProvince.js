import { fetchData } from '../customHook/callApi';

export const fetchShowtimeOfFilmInProvince = async (title, province) => {
    let startTime = "2024-10-31T23:00:00.000Z"
    let endTime = "2024-11-28T16:00:00.000Z"
    console.log(`/movies/showtimes/location/${title}/${province}/${startTime}/${endTime}`);

    return fetchData(`/movies/showtimes/location/${title}/${province}/${startTime}/${endTime}`);
};
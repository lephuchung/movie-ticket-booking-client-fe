import { fetchData } from '../customHook/callApi';

export const fetchShowtimeOfFilmInProvince = async (title, province, startTime, endTime) => {
    // let startTime1 = "2024-10-31T23:00:00.000Z"
    // let endTime1 = "2024-11-28T16:00:00.000Z"
    // console.log(`/movies/showtimes/location/${title}/${province}/${startTime}/${endTime}`);
    // console.log(`startTime/${startTime}`);
    // console.log(`endTime/${endTime}`);

    return fetchData(`/movies/showtimes/location/${title}/${province}/${startTime}/${endTime}`);
};
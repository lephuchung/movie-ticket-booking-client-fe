import { fetchData } from '../customHook/callApi';

export const fetchShowtimeOfFilmInProvince = async (movieId, province, startTime, endTime) => {
    return fetchData(`/showtimes/${movieId}/${province}/${startTime}/${endTime}`);
};

export const fetchShowtimeOfFilmInProvinceV2 = async (movieId, province) => {
    return fetchData(`/showtimes/${movieId}/${province}/next-three-day`);
}
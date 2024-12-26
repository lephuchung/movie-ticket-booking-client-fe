import { fetchData } from '../customHook/callApi';

export const fetchTicketByShowtimeId = async (showtimeId) => {
    return fetchData(`/tickets/showtime/${showtimeId}`);
};
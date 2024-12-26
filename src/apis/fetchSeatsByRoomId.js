import { fetchData } from '../customHook/callApi';

export const fetchSeatsByRoomId = async (roomId) => {
    return fetchData(`/seats/room/${roomId}`);
};

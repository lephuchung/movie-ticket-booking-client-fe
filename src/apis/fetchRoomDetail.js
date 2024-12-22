import { fetchData } from '../customHook/callApi';

export const fetchRoomDetail = async (roomId) => {
    return fetchData(`/rooms/${roomId}`);
};
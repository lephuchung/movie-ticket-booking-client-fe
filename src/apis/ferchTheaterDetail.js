import { fetchData } from '../customHook/callApi';

export const fetchTheaterDetail = async (theaterId) => {
    return fetchData(`/theater/${theaterId}`);
};
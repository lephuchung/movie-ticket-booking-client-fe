import { fetchData } from '../customHook/callApi';

export const fetchProvince = async () => {
    return fetchData("/theater/locations");
};
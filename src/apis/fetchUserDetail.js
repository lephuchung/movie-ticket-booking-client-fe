import { fetchData } from '../customHook/callApi';

export const fetchUserDetail = async (userId) => {
    return fetchData(`/users/${userId}`);
};
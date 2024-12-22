import { fetchData } from '../customHook/callApi';

export const fetchTicketByEmail = async (email) => {
    return fetchData(`/tickets/user/${email}`);
};
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

export const changePassword = async (userId, newPassword) => {
    try {
        const response = await axios.put(
            `${API_URL}${API_PREFIX}/users/${userId}/change-password`,
            { newPassword }
        );
        console.log(response.data.message);
        return response.data;
    } catch (error) {
        console.error(error.response.data.error);
        throw error.response.data;
    }
};
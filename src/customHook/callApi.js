import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

export const fetchData = async (link) => {
    try {
        const response = await axios.get(`${API_URL}${API_PREFIX}${link}`);
        return response.data || [];
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.warn(`API returned 404 for link ${link}. Returning empty array.`);
            return []; // Trả về mảng rỗng nếu gặp lỗi 404
        }
        console.error(`Error fetching link ${link}: ${error}`);
        throw error; // Ném lỗi để xử lý bên ngoài
    }
};
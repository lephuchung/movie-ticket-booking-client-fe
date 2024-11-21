import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async (link) => {
    try {
        const response = await axios.get(`${API_URL}${link}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching link ${link}: ${error}`);
        throw error; // Ném lỗi để xử lý bên ngoài
    }
};
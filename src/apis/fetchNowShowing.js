import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchNowShowingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movies/now_showing`);
        return response.data; // Dữ liệu nhận được từ API
    } catch (error) {
        console.error('Error fetching now showing movies:', error);
        throw error; // Ném lỗi để xử lý bên ngoài
    }
};
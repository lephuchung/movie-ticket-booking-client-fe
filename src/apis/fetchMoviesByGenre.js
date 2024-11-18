import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;

export const fetchMoviesByGenre = async (genre) => {
    console.log("check api url: ", API_URL);

    try {
        const response = await axios.get(`${API_URL}/movies/now_showing/${genre}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching now showing movies:', error);
        throw error;
    }
};
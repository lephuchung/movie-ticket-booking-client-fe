import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

export const changePassword = async (userId, newPassword) => {
    try {
        const response = await axios.put(
            `${API_URL}${API_PREFIX}/users/${userId}/change-password`,
            { newPassword }
        );
        toast.success("Đổi mật khẩu thành công!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return response.data;
    } catch (error) {
        console.error(error.response.data.error);
        toast.error("Đổi mật khẩu thất bại!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        throw error.response.data;
    }
};
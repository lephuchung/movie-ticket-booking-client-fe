export const signIn = async (formData) => {
    console.log("check formdata: ", formData);
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log("Check result: ", result);

        if (response.ok) {
            localStorage.setItem("token", result.accessToken);
            localStorage.setItem("user", JSON.stringify(result.userEmail));
            return { success: true, token: result.token, user: result.user };
        } else {
            return { success: false, error: result.error, status: response.status };
        }
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};

export const signOut = async () => {
    try {
        const token = localStorage.getItem("token"); // Lấy token từ localStorage

        if (!token) {
            console.warn("No token found, user already logged out.");
            return;
        }

        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Gửi token trong header
            },
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Logout successful:", result.message);

            // Xóa token và thông tin người dùng khỏi localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Điều hướng người dùng về trang đăng nhập
            window.location.href = "/";
        } else {
            console.error("Logout failed:", result.error);
        }
    } catch (error) {
        console.error("An error occurred while logging out:", error.message);
    }
};

export const signUp = async (formData) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));
            return { success: true, token: result.token, user: result.user };
        } else {
            return { success: false, error: result.error, status: response.status };
        }
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};

export const isSignedIn = () => {
    return !!localStorage.getItem("token");
}

export const getUserInfo = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};
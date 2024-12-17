import React, { useEffect, useState, useCallback } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { signIn } from "../../apis/auth";

const Login = ({ }) => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        loginEmail: "",
        loginPassword: "",
        registerEmail: "",
        registerPhoneNumber: "",
        registerName: "",
        registerPassword: "",
        registerRePassword: "",
    });

    // Hàm chung xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Xóa toàn bộ form
    const clearForm = useCallback(() => {
        setFormData({
            loginEmail: "",
            loginPassword: "",
            registerEmail: "",
            registerPhoneNumber: "",
            registerName: "",
            registerPassword: "",
            registerRePassword: "",
        });
    }, []);

    const toggleForm = () => {
        clearForm();
        setIsLogin((prev) => !prev);
    };

    const handleLogin = async () => {
        try {
            if (!formData.loginEmail.trim() || !formData.loginPassword.trim()) {
                alert("Vui lòng nhập đầy đủ email và mật khẩu!");
                return;
            }

            const response = await signIn({
                email: formData.loginEmail,
                password: formData.loginPassword,
            });

            if (response.success) {
                navigate("/");
            } else {
                alert(response.error || "Đăng nhập thất bại! Vui lòng thử lại.");
                console.log(response);

            }
        } catch (error) {
            console.error("Lỗi khi đăng nhập:", error);
            alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
        } finally {
            clearForm();
        }
    };

    // useEffect(() => {
    //     if (isAuth) navigate("/");
    // }, [isAuth, navigate]);

    return (
        <div className="auth-container">
            <div className={`form-wrapper ${isLogin ? "login-active" : "register-active"}`}>
                {/* Login Form */}
                <div className={`form login-form ${isLogin ? "active" : ""}`}>
                    <h2>Đăng Nhập</h2>
                    <input
                        type="email"
                        name="loginEmail"
                        placeholder="Email"
                        className="input-field"
                        value={formData.loginEmail}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="loginPassword"
                        placeholder="Mật khẩu"
                        className="input-field"
                        value={formData.loginPassword}
                        onChange={handleInputChange}
                    />
                    <button className="btn" onClick={handleLogin}>
                        Đăng Nhập
                    </button>
                    <p>
                        Chưa có tài khoản?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Đăng ký
                        </span>
                    </p>
                    <div>
                        <p>Hoặc đăng nhập với</p>
                        <div className="login-form-authen-area">
                            <button className="login-form-authen-button">
                                <FcGoogle className="icon gmail" />
                            </button>
                            <button className="login-form-authen-button">
                                <SiFacebook className="icon facebook" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Register Form */}
                <div className={`form register-form ${!isLogin ? "active" : ""}`}>
                    <h2>Đăng Ký</h2>
                    <input
                        type="text"
                        name="registerName"
                        placeholder="Tên đầy đủ"
                        className="input-field"
                        value={formData.registerName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="registerEmail"
                        placeholder="Email"
                        className="input-field"
                        value={formData.registerEmail}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="registerPhoneNumber"
                        placeholder="Phone number"
                        className="input-field"
                        value={formData.registerPhoneNumber}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="registerPassword"
                        placeholder="Mật khẩu"
                        className="input-field"
                        value={formData.registerPassword}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="registerRePassword"
                        placeholder="Xác nhận mật khẩu"
                        className="input-field"
                        value={formData.registerRePassword}
                        onChange={handleInputChange}
                    />
                    <button className="btn">Đăng Ký</button>
                    <p>
                        Đã có tài khoản?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Đăng nhập
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
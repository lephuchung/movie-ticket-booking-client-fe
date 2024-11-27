import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRePassword, setRegisterRePassword] = useState("");

    const handleOnChangeLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleOnChangeLoginPassword = (e) => {
        setLoginPassword(e.target.value)
    }

    const handleOnChangeRegisterEmail = (e) => {
        setRegisterEmail(e.target.value)
    }

    const handleOnChangeRegisterPhoneNumber = (e) => {
        setRegisterPhoneNumber(e.target.value)
    }

    const handleOnChangeRegisterName = (e) => {
        setRegisterName(e.target.value)
    }

    const handleOnChangeRegisterPassword = (e) => {
        setRegisterPassword(e.target.value)
    }

    const handleOnChangeRegisterRePassword = (e) => {
        setRegisterRePassword(e.target.value)
    }

    const clearForm = () => {
        setLoginEmail("");
        setLoginPassword("");
        setRegisterEmail("");
        setRegisterPhoneNumber("");
        setRegisterName("");
        setRegisterPassword("");
        setRegisterRePassword("");
    }
    const toggleForm = () => {
        clearForm();
        setIsLogin((prev) => !prev);
    };

    useEffect(() => {
        if (isAuth) navigate("/");
    }, [isAuth])


    return (
        <div className="auth-container">
            <div className={`form-wrapper ${isLogin ? "login-active" : "register-active"}`}>
                <div className={`form login-form ${isLogin ? "active" : ""}`}>
                    <h2>Đăng Nhập</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={loginEmail}
                        onChange={(event) => { handleOnChangeLoginEmail(event) }}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className="input-field"
                        value={loginPassword}
                        onChange={(event) => { handleOnChangeLoginPassword(event) }}
                    />
                    <button className="btn">Đăng Nhập</button>
                    <p>
                        Chưa có tài khoản?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Đăng ký
                        </span>
                    </p>
                </div>

                <div className={`form register-form ${!isLogin ? "active" : ""}`}>
                    <h2>Đăng Ký</h2>
                    <input
                        type="text"
                        placeholder="Tên đầy đủ"
                        className="input-field"
                        value={registerName}
                        onChange={(event) => { handleOnChangeRegisterName(event) }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={registerEmail}
                        onChange={(event) => { handleOnChangeRegisterEmail(event) }}
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="input-field"
                        value={registerPhoneNumber}
                        onChange={(event) => { handleOnChangeRegisterPhoneNumber(event) }}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className="input-field"
                        value={registerPassword}
                        onChange={(event) => { handleOnChangeRegisterPassword(event) }}
                    />
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        className="input-field"
                        value={registerRePassword}
                        onChange={(event) => { handleOnChangeRegisterRePassword(event) }}
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
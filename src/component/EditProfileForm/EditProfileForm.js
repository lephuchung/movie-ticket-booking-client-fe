import React, { useState } from 'react'
import "./EditProfileForm.scss"
import { CgCloseO } from 'react-icons/cg'
import { changePassword } from '../../apis/updatePassword';

const EditProfileForm = ({ userId, setOpenPopupEditProfile }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
        setError(''); // Clear error when user types
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError('');
    };

    const handleSubmit = () => {
        if (!newPassword || !confirmPassword) {
            setError('Vui lòng nhập đầy đủ thông tin.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Mật khẩu không khớp.');
            return;
        }

        changePassword(userId, newPassword)
        setNewPassword('');
        setConfirmPassword('');
        setOpenPopupEditProfile(false);
    };

    const handleCloseForm = () => {
        setNewPassword('');
        setConfirmPassword('');
        setOpenPopupEditProfile(false);
    }

    return (
        <div className="edit-profile-overlay">
            <div className="edit-profile-container">
                <button className="edit-profile-close-button" onClick={() => handleCloseForm()}>
                    <CgCloseO />
                </button>
                <h2>Đổi mật khẩu</h2>
                <div className="edit-profile-form">
                    <label for="password">Mật khẩu mới</label>
                    <input
                        type="password"
                        id="password"
                        value={newPassword}
                        onChange={handlePasswordChange}
                        placeholder="Nhập mật khẩu mới"
                    />
                    <label for="confirmPassword">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Nhập lại mật khẩu"
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button
                        className="edit-profile-confirm-button"
                        onClick={handleSubmit}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProfileForm
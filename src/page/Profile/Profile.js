import React, { useEffect, useState } from 'react'
import "./Profile.scss"
import avatarPlaceHolder from "./image.png"
import { MdModeEdit } from "react-icons/md"
import {
    tickets
} from '../Data';
import TicketBoughtTable from '../../component/TicketBoughtTable/TicketBoughtTable';
import { useNavigate } from 'react-router';
import { signOut } from '../../apis/auth';
import { fetchTicketByEmail } from '../../apis/fetchTicketsByEmail';
import EditProfileForm from '../../component/EditProfileForm/EditProfileForm';

const Profile = () => {
    const navigate = useNavigate();
    const [tickesBooked, setTicketBooked] = useState([]);
    const [openPopupEditProfile, setOpenPopupEditProfile] = useState(false);

    const handleSignout = () => {
        signOut();
    }

    const getInfor = async () => {
        const ticketsFetch = await fetchTicketByEmail(userData?.Email)
        setTicketBooked(ticketsFetch);
    }
    useEffect(() => {
        if (!localStorage.token) navigate("/login")
    }, [localStorage.token])

    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);

    useEffect(() => {
        getInfor();
    }, [])

    return (
        <div className="profile-container">
            <div className="profile-info">
                <div className="profile-info-header">
                    <img src={avatarPlaceHolder} alt="Profile Picture" className="profile-info-avatar" />
                    <h2 className="profile-info-name">{userData?.Name}</h2>
                </div>
                <div className="profile-details">
                    <p>
                        <strong>
                            Mã người dùng: &nbsp;
                        </strong>
                        {userData?.UserId}
                    </p>
                    <p>
                        <strong>
                            Email: &nbsp;
                        </strong>
                        {userData?.Email}
                    </p>
                    <p>
                        <strong>
                            Số điện thoại: &nbsp;
                        </strong>
                        {userData?.Phone}
                    </p>
                </div>
                <button className='profile-change-button'>
                    <MdModeEdit className='profile-change-button-icon' onClick={() => setOpenPopupEditProfile(true)} />
                </button>
                <button className='profile-signout' onClick={() => { handleSignout() }}>Đăng xuất</button>
            </div>

            <div className="profile-purchase-history">
                <h3 className='profile-purchase-history-title'>Các Vé Đã Mua</h3>
                <TicketBoughtTable tickets={tickesBooked} />
            </div>
            {openPopupEditProfile && <EditProfileForm userId={userData?.UserId} setOpenPopupEditProfile={setOpenPopupEditProfile} />}
        </div>
    )
}

export default Profile
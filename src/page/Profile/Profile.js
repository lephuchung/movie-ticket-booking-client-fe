import React from 'react'
import "./Profile.scss"
import avatarPlaceHolder from "./image.png"
import { MdModeEdit } from "react-icons/md"
import {
    tickets
} from '../Data';
import TicketBoughtTable from '../../component/TicketBoughtTable/TicketBoughtTable';

const Profile = () => {
    return (
        <div class="profile-container">
            <div class="profile-info">
                <div class="profile-info-header">
                    <img src={avatarPlaceHolder} alt="Profile Picture" class="profile-info-avatar" />
                    <h2 class="profile-info-name">Le Phuc Hung</h2>
                </div>
                <div class="profile-details">
                    <p>
                        <strong>
                            Mã người dùng:
                        </strong>
                        123456
                    </p>
                    <p>
                        <strong>
                            Email:
                        </strong>
                        lephuchung003@gmail.com
                    </p>
                    <p>
                        <strong>
                            Số điện thoại:
                        </strong>
                        0776254309
                    </p>
                </div>
                <button className='profile-change-button'>
                    <MdModeEdit className='profile-change-button-icon' />
                </button>
            </div>

            <div class="profile-purchase-history">
                <h3 className='profile-purchase-history-title'>Các Vé Đã Mua</h3>
                <TicketBoughtTable tickets={tickets} />
            </div>
        </div>
    )
}

export default Profile
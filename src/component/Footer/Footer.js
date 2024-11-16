import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="/logo.png" alt="Logo" className="footer-logo" />
                <div className="footer-text">
                    <p className='footer-text-title'>Web đặt vé xem phim </p>
                    <p className='footer-text-title'>Công nghệ web và dịch vụ trực tuyến</p>
                    <p className='footer-text-title'>IT4409 - 151901 - Nhóm 12</p>
                    <div className='footer-text-member-area'>
                        <div className='footer-text-member-area-left'>
                            <p className='footer-text-member'>Lê Phúc Hưng - 20215276</p>
                            <p className='footer-text-member'>Nông Phi Hùng - 20215276</p>
                        </div>
                        <div className='footer-text-member-area-right'>
                            <p className='footer-text-member'>Phạm Tấn Hưng - 20215276</p>
                            <p className='footer-text-member'>Nguyễn Thanh Hương - 20215276</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
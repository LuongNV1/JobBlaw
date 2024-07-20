import './index.css';
import logoHeader from '../../assets/img/Frame 13.png';
import checkDow from '../../assets/img/chevron-down.png';

const Header = () => {
    return (
        <>
            <div className="container-header">
                <div className="container-logo-header">
                    <img className="logo-header" src={logoHeader} alt="ảnh logo" />
                </div>
                <div>
                    <ul className="list-item">
                        <li className="item">Tuyển dụng</li>
                        <li className="item">Ứng viên</li>
                        <li className="item">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                Pháp luật lao động
                                <span className="chevron-icon iconCheckDow">
                                    <img src={checkDow} alt="Chevron Down" />
                                </span>
                            </div>
                        </li>
                        <li className="item">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                Tiện ích
                                <span className="chevron-icon iconCheckDow">
                                    <img src={checkDow} alt="Chevron Down" />
                                </span>
                            </div>
                        </li>
                        <li className="item">Dịch vụ</li>
                        <li className="item">Huớng dẫn sử dụng</li>
                        <li className="item">Danh bạ luật sư</li>
                        <li className="item">Liên hệ</li>
                    </ul>
                </div>
                <div className="list-btn">
                    <button className="btn-header btn-register">Đăng kí</button>
                    <button className="btn-header btn-login">Đăng nhập</button>
                </div>
            </div>
        </>
    );
};

export default Header;

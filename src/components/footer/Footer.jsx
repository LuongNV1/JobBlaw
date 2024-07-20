import './index.css';
import logo from '../../assets/img/JOBLAW.png';
import phoneIcon from '../../assets/img/phone.png';
import logoFacebook from '../../assets/img/logos_facebook.png';
import logoInstagram from '../../assets/img/skill-icons_instagram.png';
import logoTwitter from '../../assets/img/formkit_twitter.png';
import logoLinkedin from '../../assets/img/skill-icons_linkedin.png';
import line from '../../assets/img/Line 173.png';
import home from '../../assets/img/Vector.png';
import lineSmall from '../../assets/img/Vector 84.png';

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                <div className="main">
                    <div className="contact">
                        <div className="container-logo ">
                            <img className="logo" src={logo} alt="Ảnh logo" />
                        </div>

                        <div className="phoneText">
                            <div className="phoneIcon">
                                <img src={phoneIcon} alt="icon dien thoai" />
                                <span>Liện hệ</span>
                            </div>
                            <div>
                                <span className="text">
                                    Hệ thống Hotline hỗ trợ 24/7. Nếu cần hỗ trợ gì vui gọi vào số :
                                    <span className="phone">024.62872777 - 091.121.9099</span>
                                </span>
                            </div>
                        </div>

                        <div className="list-social">
                            <div>Cộng đồng JobLaw</div>
                            <div className="social">
                                <img src={logoFacebook} alt="icon fb" />
                                <img src={logoInstagram} alt="icon instagram" />
                                <img src={logoTwitter} alt="icon twitter" />
                                <img src={logoLinkedin} alt="icon linked" />
                            </div>
                        </div>
                    </div>

                    <div className="about">
                        <div className="about-item">
                            <div className="about-item-main">
                                <div className="about-item-main">
                                    <div className="header-text">
                                        <span>Về chúng tôi</span>
                                    </div>
                                    <div className="text-about">
                                        <span>Về Joblaw</span>
                                        <span>Quy chế hoạt động</span>
                                        <span>Tầm nhìn</span>
                                        <span>Sứ mệnh</span>
                                        <span>Lịch sử phát triển</span>
                                    </div>
                                </div>
                            </div>

                            <div className="about-item-main">
                                <div className="header-text">
                                    <span>Khám phá</span>
                                </div>

                                <div className="text-about">
                                    <span>Tính lương Gross - Net</span>
                                    <span>Hỏi đáp ngành luật</span>
                                    <span>Công cụ tính thuế TNCN</span>
                                    <span>Đánh hướng nghành luật</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-item">
                            <div className="about-item-main">
                                <div className="header-text">
                                    <span>Trợ giúp & dịch vụ</span>
                                </div>
                                <div className="text-about">
                                    <span>Hướng dãn sử dụng</span>
                                    <span>Mẫu hợp đồng dịch vụ</span>
                                    <span>Quy trình tiếp nhận và giải quyết khiếu nại</span>
                                    <span>Bảo phí dịch vụ</span>
                                </div>
                            </div>

                            <div className="about-item-main">
                                <div className="header-text">
                                    <span>Phát triển bản thân</span>
                                </div>
                                <div className="text-about">
                                    <span>Tính lương Gross - Net</span>
                                    <span>Đ hướng nghành luật</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-item">
                            <div className="about-item-main">
                                <div className="header-text">
                                    <span>Hồ sơ CV</span>
                                </div>
                                <div className="text-about">
                                    <span>Quản lý CV của bạn</span>
                                    <span>Quy chế hoạt động</span>
                                    <span>Quản lý việc đã làm</span>
                                    <span>Nhà tuyển dụng xem xét hồ sơ của bạn</span>
                                </div>
                            </div>
                            <div className="about-item-main">
                                <div className="header-text">
                                    <span>Xây dựng sự nghiệp</span>
                                </div>
                                <div className="text-about">
                                    <span>Việc làm tốt nhất</span>
                                    <span>Việc làm lương cao</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="bottom-main">
                        <div>
                            <img src={line} alt="Line" />
                        </div>
                        <div className="bottom-conten">
                            <div className="content-lef">
                                <div>
                                    <img src={home} alt="home" />
                                    <span className="bottom-content-text">
                                        Trụ sở HN: Căn 14 - Manor 1 Str Sunrise A - KĐT The Manor Central Park Nguyễn
                                        Xiển, phường Đại Kim, quận Hoàng Mai, TP. Hà Nội.
                                    </span>
                                </div>

                                <div>
                                    <img src={home} alt="home" />
                                    <span className="text-small">Gmail: joblaw@gmail.com</span>
                                </div>

                                <div>
                                    <img src={home} alt="home" />
                                    <span className="text-small">
                                        Số tài khoản: 9911219099 - Techcombank - CN Hà Thành
                                    </span>
                                </div>
                            </div>

                            <div className="bottom-input">
                                <span className="text-small">Nhận thông tin việc làm</span>
                                <input className="input" placeholder="Nhập email của bạn !" />
                                <button className="btn-footer">Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information-footer">
                    <span className="info-text">Copyright © 2021 All rights reserved. Web Design by Tech5s</span>
                    <img src={lineSmall} alt="line" />
                    <span className="info-text">Privacy Policy</span>
                    <img src={lineSmall} alt="line" />
                    <span className="info-text">Site map</span>
                </div>
            </div>
        </>
    );
};

export default Footer;

/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Images
import homeDecor3 from "assets/images/home-decor-3.jpg";
import './index.css';

function Overview() {
  return (
    <>
      <div className="s003">
        <form>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="">Nhập ngành nghề</option>
                  <option>New Arrivals</option>
                  <option>Sale</option>
                  <option>Ladies</option>
                  <option>Men</option>
                  <option>Clothing</option>
                  <option>Footwear</option>
                  <option>Accessories</option>
                </select>
                <div className="logo-drop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M6.5 9L12.5 15L18.5 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              </div>
            </div>
            <div className="input-field first-wrap">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="">Nhập địa điểm làm việc</option>
                  <option>New Arrivals</option>
                  <option>Sale</option>
                  <option>Ladies</option>
                  <option>Men</option>
                  <option>Clothing</option>
                  <option>Footwear</option>
                  <option>Accessories</option>
                </select>
                <div className="logo-drop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M6.5 9L12.5 15L18.5 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="input-field second-wrap">
              <input id="search" type="text" placeholder="Enter Keywords?" />
            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">
                Tìm kiếm nhanh
              </button>
            </div>
          </div>
        </form>
        <div className="register-button">
        <a href='323' className='button-primary search'>
                <span>Đăng tin tuyển dụng</span>
              </a>
          <a href='323' className='button-primary seccon search'>
                <span>Dịch vụ đăng tin</span>
              </a></div>
      </div>

      <div className="container">
        <div className="top-info">
          <div className="base-info">
            <div className="info bg-grey">
              <img src={homeDecor3} width="153" height="153" />
              <div className="info-content">
                <div className="info-name">Mai Lan Ngoc</div>
                <div className="info-item">
                  <div><span className="info-field">Ngày sinh:</span> 15/01/1990</div>
                  <div><span className="info-field">Ngày sinh:</span>: 023455 ****</div>
                </div>
                <div className="info-item">
                  <div><span className="info-field">Ngày sinh:</span> 15/01/1990</div>
                  <div><span className="info-field">Ngày sinh:</span>: 023455 ****</div>
                </div>
                <div className="info-item">
                  <div><span className="info-field">Ngày sinh:</span> 15/01/1990</div>
                  <div><span className="info-field">Ngày sinh:</span>: 023455 ****</div>
                </div>
              </div>
            </div>
            <div>
              <a href='323 ' className='button-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path d="M6.6875 15.6254C0.500001 16.3129 1.1875 8.75038 6.6875 9.43788C4.625 1.87538 16.3125 1.87539 15.625 7.37539C22.5 5.31289 22.5 16.3129 16.3125 15.6254M8.0625 18.3754L11.5 21.1254M11.5 21.1254L14.9375 18.3754M11.5 21.1254V11.5004"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Hồ sơ đính kèm</span>
              </a>
              <br />
              <a href='323 ' className='button-primary seccon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                  <path d="M8.25004 4.58869C9.13938 4.30676 10.0671 4.16451 11 4.16702C14.8335 4.16702 17.4424 6.45869 18.998 8.47903C19.7771 9.49286 20.1667 9.99794 20.1667 11.5004C20.1667 13.0037 19.7771 13.5088 18.998 14.5217C17.4424 16.542 14.8335 18.8337 11 18.8337C7.16654 18.8337 4.55771 16.542 3.00212 14.5217C2.22296 13.5097 1.83337 13.0028 1.83337 11.5004C1.83337 9.99702 2.22296 9.49194 3.00212 8.47903C3.47729 7.85817 4.00643 7.28056 4.58337 6.75294" stroke="#1C4B82" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M13.75 11.5C13.75 12.2293 13.4603 12.9288 12.9445 13.4445C12.4288 13.9603 11.7293 14.25 11 14.25C10.2707 14.25 9.57118 13.9603 9.05546 13.4445C8.53973 12.9288 8.25 12.2293 8.25 11.5C8.25 10.7707 8.53973 10.0712 9.05546 9.55546C9.57118 9.03973 10.2707 8.75 11 8.75C11.7293 8.75 12.4288 9.03973 12.9445 9.55546C13.4603 10.0712 13.75 10.7707 13.75 11.5Z" stroke="#1C4B82" strokeWidth="1.5" />
                </svg>
                <span>Hồ sơ đính kèm</span>
              </a>
            </div>
          </div>
        </div>
        <div className="info info-detail bg-grey" >
          <div className="full-width">
            <div className="info-title">Thông tin nghề nghiệp</div>
            <div className="">
              <div className="info-item">
                <div className="info-text"><span className="info-field">Ngày sinh:</span> 15/01/1990</div>
                <div className="info-text"><span className="info-field">Ngày sinh:</span>: 023455 ****</div>
              </div>
              <div className="info-item">
                <div className="info-text"><span className="info-field">Ngày sinh:</span> 15/01/1990</div>
                <div ><span className="info-field">Ngày sinh:</span>: 023455 ****</div>
              </div>
              <div className="info-item job"><span className="info-field">Ngày sinh:</span>: Pháp chế doanh nghiệp | Kế toán | Chuyên viên pháp lý</div>
            </div>
          </div>
          <div className="line-space"></div>
          <div className="full-width">
            <div className="info-title">Kinh nghiệm làm việc</div>
            <ul className="info-list">
              <li className="info-field">Công ty KA LAW</li>
            </ul>
            <div className="info-item">
              <div><span className="info-field">Ngày sinh:</span> 15/01/1990</div>
            </div>
            <div className="info-item">
              <div><span className="info-field">Ngày sinh:</span> 15/01/1990</div>

            </div>

          </div>
          <div className="line-space"></div>
          <div className="full-width">
            <div className="info-title">Kinh nghiệm làm việc</div>
            <ul className="info-list">
              <li>Legal research & writing
              </li>
              <li>Legal research & writing
              </li>
              <li>Legal research & writing
              </li>
              <li>Legal research & writing
              </li>
              <li>Legal research & writing
              </li>
              <li>Legal research & writing
              </li>
            </ul>
          </div>
          <div className="line-space"></div>
          <div className="full-width">
            <div className="info-title">Kinh nghiệm làm việc</div>
            <p className="text-detail">To improve experience in making, strategic solutions, and problemsolving in reality law field, I pledge to be wholeheartedly for the work responsibility. Being known as an active and hard-working college student who loves to collaborate in diverse environments, eager to learn and can be adapt to fast-paced challenging work environment. Your recruitment is my opportunity to contribute my ability and increase my legal knowledge.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;

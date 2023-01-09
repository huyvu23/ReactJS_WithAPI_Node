import React from "react";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
function HomeHeader(props) {
  console.log(props);
  return (
    <>
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i className=" fas fa-bars" />
            <div className="header-logo"></div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="home-header.speciality" />
                </b>
              </div>
              <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
            </div>
            <div className="child-content">
              <div>
                <b>Cơ sở y tế</b>
              </div>
              <div className="subs-title">Chọn bệnh viện phòng khám</div>
            </div>
            <div className="child-content">
              <div>
                <b>Bác sĩ</b>
              </div>
              <div className="subs-title">Chọn bác sĩ giỏi</div>
            </div>
            <div className="child-content">
              <div>
                <b>Gói khám</b>
              </div>
              <div className="subs-title">Khám sức khoẻ tổng quát</div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i className="fas fa-question-circle"></i>
              Hỗ trợ
            </div>
            <div className="language-vi">VN</div>
            <div className="language-en">EN</div>
          </div>
        </div>
      </div>
      {/* ================================= */}
      <div className="home-header-banner">
        <div className="content-up">
          <div className="title1">NỀN TẢNG Y TẾ</div>
          <div className="title2">CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</div>
          <div className="search">
            <i className="fas fa-search" />
            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
          </div>
        </div>
        <div className="content-dow">
          <div className="options">
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-hospital" />
              </div>
              <div className="text-child">Khám chuyên khoa</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-mobile-alt" />
              </div>
              <div className="text-child">Khám từ xa</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-procedures" />
              </div>
              <div className="text-child">Khám tổng quát</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-flask" />
              </div>
              <div className="text-child">Xét nghiệm y học</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-user-md" />
              </div>
              <div className="text-child">Sức khoẻ tinh thần</div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-briefcase-medical" />
              </div>
              <div className="text-child">Khám nha khoa</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

export default HomeHeader;

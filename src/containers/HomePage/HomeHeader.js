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
                  <FormattedMessage id="home-header.specialty" />
                </b>
              </div>
              <div className="subs-title">
                <FormattedMessage id="home-header.searchDoctor" />
              </div>
            </div>
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="home-header.health-facility" />
                </b>
              </div>
              <div className="subs-title">
                <FormattedMessage id="home-header.select-room" />
              </div>
            </div>
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="home-header.doctor" />
                </b>
              </div>
              <div className="subs-title">
                <FormattedMessage id="home-header.select-doctor" />
              </div>
            </div>
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="home-header.fee" />
                </b>
              </div>
              <div className="subs-title">
                <FormattedMessage id="home-header.general-health-check" />
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i className="fas fa-question-circle" />
              <FormattedMessage id="home-header.support" />
            </div>
            <div className="language-vi">VN</div>
            <div className="language-en">EN</div>
          </div>
        </div>
      </div>
      {/* ================================= */}
      <div className="home-header-banner">
        <div className="content-up">
          <div className="title1">
            <FormattedMessage id="banner.medical-background" />
          </div>
          <div className="title2">
            <FormattedMessage id="banner.comprehensive-health-care" />
          </div>
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
              <div className="text-child">
                {" "}
                <FormattedMessage id="banner.specialized-examination" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-mobile-alt" />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.remote-examination" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-procedures" />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.general-examination" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-flask" />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.medical-test" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-user-md" />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.mental-health" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i className="fas fa-briefcase-medical" />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.dental-examination" />
              </div>
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

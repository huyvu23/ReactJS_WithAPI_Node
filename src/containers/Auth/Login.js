import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";

function Login(props) {
  // * ALL STATE
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [errMessage, setErrorMessage] = useState("");

  let handleLogin = async () => {
    setErrorMessage("");
    try {
      let data = await handleLoginApi(userName, passWord);
      if (data && data.errCode !== 0) {
        setErrorMessage(data.errMessage);
      }
      if (data && data.errCode === 0) {
        console.log("Login Success");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  let hideAndShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username :</label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter your username"
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password :</label>
              <div className="custom-input-password">
                <input
                  value={passWord}
                  onChange={(e) => setPassWord(e.target.value)}
                  type={showPass ? "password" : "text"}
                  className="form-control"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => {
                    hideAndShowPass();
                  }}
                >
                  <i className={showPass ? "far fa-eye-slash" : "far fa-eye"} />
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {errMessage}
            </div>

            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot the password ?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Login with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google" />
              <i className="fab fa-facebook-f facebook" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
    // userLoginSuccess: () => dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

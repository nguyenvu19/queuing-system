import * as React from "react";
import logo from "../../image/LogoAlta.png";
import frame from "../../image/Frame.png";

import "./forgotPassword.css";

export interface ForgotPasswordProps {}

export default function ForgotPassword(props: ForgotPasswordProps) {
  return (
    <div className="forgotPassword">
      <div className="form">
        <img src={logo} alt="" className="logo" />
        <div className="input">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <p className="text">
            Vui lòng nhập email để đặt lại mật khẩu của bạn *
          </p>
          <input type="text" />
        </div>

        <div className="button">
          <button className="cancel">Hủy</button>
          <button className="continue">Tiếp tục</button>
        </div>
      </div>
      <div className="frame">
        <img src={frame} alt="" />
      </div>
    </div>
  );
}

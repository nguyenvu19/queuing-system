import React, { useState } from "react";
import logo from "../../image/LogoAlta.png";
import group from "../../image/Group341.png";
import "./login.css";

export interface LoginProps {}

export default function Login(props: LoginProps) {
  const [user, setUser] = useState(true);

  return (
    <div className="login">
      <div className={user ? "form" : "form warning"}>
        <img src={logo} alt="" />
        <div className="container">
          <div className="input">
            Tên đăng nhập *
            <input type="text" placeholder="User name" />
          </div>
          <div className="input">
            Mật khẩu *
            <div className="password">
              <input type="password" placeholder="Password" />
              {/* <img src={Images.EYE_ICON} alt="" /> */}
            </div>
          </div>
          <div className="notion">
            <p>Sai mật khẩu hoặc tên đăng nhập</p>
          </div>
          <div className="button">
            <a href="">Quên mật khẩu?</a>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
      <div className="group">
        <img src={group} alt="" />
        <div className="title">
          <h2 className="subtitle">Hệ thống</h2>
          <h1 className="name">QUẢN LÝ XẾP HÀNG</h1>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import logo from "../../image/LogoAlta.png";
import group from "../../image/Group341.png";
export interface LoginProps {}

export default function Login(props: LoginProps) {
  return (
    <div className="main">
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <img src={group} alt="group" />
      </div>
    </div>
  );
}

import React from "react";
import logo from "../assets/images/Warm.png";
import style from "../styles/Navbar.scss";

const Logo = () => {
  return (
    <div className="d-flex align-items-end gap-1">
      <img src={logo} alt="Logo" className={style.logo} />

      <h5>HAPPY GALERİ</h5>
    </div>
  );
};

export default Logo;

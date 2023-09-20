import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon.jsx";
import refreshIcon from "./img/refreshIcon.svg";
import viewlistIcon from "./img/viewlistIcon.svg";
import settingsIcon from "./img/settingsIcon.svg";
import appsIcon from "./img/appsIcon.svg";
import useraccountIcon from "./img/useraccountIcon.svg";
import styles from './NavbarRightSide.css'

const NavbarRightSide = () => {
  return (
    <>
      <div className="navbar-right-side">
        <HeaderIcon icon={refreshIcon} />
        <HeaderIcon icon={viewlistIcon} />
        <HeaderIcon icon={settingsIcon} />
        <HeaderIcon icon={appsIcon} />
        <HeaderIcon icon={useraccountIcon} />
      </div>
    </>
  );
};

export default NavbarRightSide;

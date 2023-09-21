import React from "react";
import Image from "next/image";
import HeaderIcon from "../atoms/HeaderIcon";
import refreshIcon from "../atoms/img/refreshIcon.svg";
import viewlistIcon from "../atoms/img/viewlistIcon.svg";
import settingsIcon from "../atoms/img/settingsIcon.svg";
import appsIcon from "../atoms/img/appsIcon.svg";
import useraccountIcon from "../atoms/img/useraccountIcon.svg";
import styles from "./NavbarRightSide.css";

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

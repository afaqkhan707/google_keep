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
        <HeaderIcon icon={refreshIcon} title ='Refresh'  />
        <HeaderIcon icon={viewlistIcon} title ='List view' />
        <HeaderIcon icon={settingsIcon} title ='Settings' />
        <HeaderIcon icon={appsIcon} title ='apps' />
        <HeaderIcon icon={useraccountIcon} title ='user Account' />
      </div>
    </>
  );
};

export default NavbarRightSide;

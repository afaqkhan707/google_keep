"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderIcon from "../atoms/HeaderIcon";
import refreshIcon from "../atoms/img/refreshIcon.svg";
import viewlistIcon from "../atoms/img/viewlistIcon.svg";
import settingsIcon from "../atoms/img/settingsIcon.svg";
import appsIcon from "../atoms/img/appsIcon.svg";
import useraccountIcon from "../atoms/img/useraccountIcon.svg";
import styles from "./NavbarRightSide.css";

const NavbarRightSide = () => {
  const [counter, setCounter] = useState(0);

  const hello = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log("Hello");
  };
  return (
    <>
      <div className="navbar-right-side">
        <button onClick={hello}>{counter}</button>
        <HeaderIcon icon={refreshIcon} title="Refresh" alt="refresh-icon-svg" />
        <HeaderIcon icon={viewlistIcon} title="List view" alt="view-icon-svg" />
        <HeaderIcon
          icon={settingsIcon}
          title="Settings"
          alt="settings-icon-svg"
        />
        <HeaderIcon icon={appsIcon} title="apps" alt="apps-icon-svg" />
        <HeaderIcon
          icon={useraccountIcon}
          title="user Account"
          alt="user-account-icon-svg"
        />
      </div>
    </>
  );
};

export default NavbarRightSide;

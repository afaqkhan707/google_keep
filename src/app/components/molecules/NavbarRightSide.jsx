"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import HeaderIcon from "../atoms/HeaderIcon";
import refreshIcon from "../atoms/img/refreshIcon.svg";
import viewlistIcon from "../atoms/img/viewlistIcon.svg";
import settingsIcon from "../atoms/img/settingsIcon.svg";
import appsIcon from "../atoms/img/appsIcon.svg";
import useraccountIcon from "../atoms/img/useraccountIcon.svg";
import "./NavbarRightSide.css";
import {TotalContext} from "@/app/controllers/TodoListStore";

const NavbarRightSide = () => {
  
  const todoStore =  useContext(TotalContext)
  console.log('todoStore',todoStore)

 const handleRefreshClick = () => {
      window.location.reload();
    }
  return (
    <>
      <div className="navbar-right-side">
        <span>{todoStore?.notesList?.length || 0}</span>
        <HeaderIcon icon={refreshIcon} title="Refresh" onClick={handleRefreshClick} alt="refresh-icon-svg" />
        <HeaderIcon icon={viewlistIcon} title="List view" alt="view-icon-svg" />
        <HeaderIcon icon={settingsIcon} title="Settings"  alt="settings-icon-svg" />
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

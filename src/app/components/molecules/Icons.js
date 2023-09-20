import React from "react";
import LogoImg from "../atoms/Logo.jsx";
import styles from "../molecules/Icons.css";
import RefreshIcon from "../atoms/RefreshIcon";
import HeaderIcon from "../atoms/HeaderIcon.jsx";
import hamburger from "../atoms/img/hamburger.svg";
import searchIcon from "../atoms/img/searchIcon.svg";
import SearchInput from "../atoms/SearchInput.jsx";
import NavbarRightSide from "../atoms/NavbarRightSide.jsx";

const Icons = () => {
  return (
    <>
      <div className="LeftSideBar">
        <HeaderIcon icon={hamburger} />
        <LogoImg />
        <h3>Keep</h3>
      </div>
      <div className="inputField">
        <SearchInput />
      </div>
      <div className="navbar-right-side">
        <NavbarRightSide />
      </div>
    </>
  );
};

export default Icons;

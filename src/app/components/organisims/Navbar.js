import React from "react";
import styles from "./Navbar.css";
import LeftSideBar from "../molecules/LeftSideBar";
import NavbarRightSide from "../molecules/NavbarRightSide";
import SearchInput from "../atoms/SearchInput";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <LeftSideBar />
        <SearchInput/>
        <NavbarRightSide/>
      </nav>
    </>
  );
};

export default Navbar;

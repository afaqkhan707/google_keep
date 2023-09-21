import React from "react";
import styles from "./Navbar.css";
import LeftSIdeBar from "../molecules/LeftSIdeBar";
import SearchInputField from "../molecules/SearchInputField";
import NavbarRightSide from "../molecules/NavbarRightSide";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <LeftSIdeBar />
        <SearchInputField/>
        <NavbarRightSide/>
      </nav>
    </>
  );
};

export default Navbar;

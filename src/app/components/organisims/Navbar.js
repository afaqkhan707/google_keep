import React from "react";
import styles from "./Navbar.css";
import LeftSIdeBar from "../molecules/LeftSIdeBar";
import NavbarRightSide from "../molecules/NavbarRightSide";
import SearchInput from "../atoms/SearchInput";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <LeftSIdeBar />
        <SearchInput/>
        <NavbarRightSide/>
      </nav>
    </>
  );
};

export default Navbar;

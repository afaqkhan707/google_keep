import React from "react";
import "./Navbar.css";
import NavbarRightSide from "../molecules/NavbarRightSide";
import SearchInput from "../atoms/SearchInput";
import LeftSideBar from "../molecules/LeftSideBar";



const Navbar = () => {

  return (
    <>
    
      <nav className="navbar">
        <LeftSideBar />
        <SearchInput />
        <NavbarRightSide />
      </nav>
    </>
  );
};

export default Navbar;

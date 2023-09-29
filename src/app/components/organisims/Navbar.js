import React from "react";
import "./Navbar.css";
import NavbarRightSide from "../molecules/NavbarRightSide";
import SearchInput from "../atoms/SearchInput";
// import LeftSideBar from "../molecules/LeftSideBar";



const Navbar = () => {

  return (
    <>
    
      <nav className="navbar">
        {/* <LeftSideBar /> */}
        <h1>Side bar</h1>
        <SearchInput />
        <NavbarRightSide />
      </nav>
    </>
  );
};

export default Navbar;

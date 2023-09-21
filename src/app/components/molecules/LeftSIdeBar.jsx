'use client'
import React, { useState } from "react";
import styles from "../molecules/LeftSideBar.css";
import hamburgerIcon from "../atoms/img/hamburgerIcon.svg";
import HeaderIcon from "../atoms/HeaderIcon";
import Logo from "../atoms/Logo";
import Sidebar from "./Sidebar.jsx";

const LeftSideBar = () => {
  return (
    <>
      <div className="LeftSideBar">
        <HeaderIcon icon={hamburgerIcon} title ='Main Menu' />
        <Logo til ='keep'/>
        <h3>Keep</h3>
      </div>
    </>
  );
};

export default LeftSideBar;









// import React from "react";
// import styles from "../molecules/LeftSideBar.css";
// import hamburgerIcon from "../atoms/img/hamburgerIcon.svg";
// import HeaderIcon from "../atoms/HeaderIcon";
// import Logo from "../atoms/Logo";

// const LeftSIdeBar = () => {
//   return (
//     <>
//       <div className="LeftSideBar">
//         <HeaderIcon icon={hamburgerIcon} />
//         <Logo />
//         <h3>Keep</h3>
//       </div>
//     </>
//   );
// };

// export default LeftSIdeBar;

import React from "react";
import Image from "next/image";
import "./HeaderIcon.css";

const HeaderIcon = ({ icon,title}) => {
  return (
    <div className="icon-box">
      <Image src={icon} title={title} />
    </div>
  );
};

export default HeaderIcon;

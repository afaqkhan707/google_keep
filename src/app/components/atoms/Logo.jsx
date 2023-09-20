import React from "react";
import Image from "next/image";
import LogoImg from "./img/keeplogo.png";

const Logo = () => {
  return (
    <>
    <div>
      <Image src={LogoImg} width={40} height={40}/>
    </div>
    </>
  );
};

export default Logo;

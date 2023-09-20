import React from "react";
import Image from "next/image";
import searchIcon from "./img/searchIcon.svg";

const SearchIcon = () => {
  return (
    <>
      <div>
        <button className="searchBtn">
          <Image src={searchIcon} width={40} height={30} />
        </button>
      </div>
    </>
  );
};

export default SearchIcon;

import React from 'react';
import style from './Noteicons.css';
import Image from 'next/image';


const NoteIcons = ({icon}) => {
  return (
    <>
<div className="icons">
    <Image src={icon}/>
</div>
    </>
  )
}

export default NoteIcons;
import React from 'react';
import Image from 'next/image';
import style from './NoteBigIcon.css'
import pinIcon from './img/pinIcon.svg'

const NoteBigIcon = () => {
  return (
    <div className='input-box-icon-big'>
      <Image src={pinIcon}/>
    </div>
  )
}

export default NoteBigIcon;

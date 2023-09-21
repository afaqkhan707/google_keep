import React from 'react'
import Image from 'next/image'
import './HeaderIcon.css'

const HeaderIcon = ({icon}) => {
  return (
    <div className='icon-box'>
      <Image src={icon} />
    </div>
  )
}

export default HeaderIcon

import React from 'react';
import style from './Firstnote.css'
import NoteBigIcon from '../atoms/NoteBigIcon';

const TakeNoteFirst = () => {
  return (
    <div className="first-block">
    <input type="text" placeholder='Title' />
    <NoteBigIcon alttext='pinIcon-svg'/>
    </div>
  )
}

export default TakeNoteFirst;
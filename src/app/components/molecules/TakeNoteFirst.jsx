import React from 'react';
import style from './Firstnote.css'
import NoteBigIcon from '../atoms/NoteBigIcon';

const TakeNoteFirst = () => {
  return (
    <div className="first-block">
    <span>Title</span>
    <NoteBigIcon/>
    </div>
  )
}

export default TakeNoteFirst;
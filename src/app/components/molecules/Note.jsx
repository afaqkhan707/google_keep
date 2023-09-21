import React from "react";
import styles from "./Note.css";
import TakeNoteFirst from "./TakeNoteFirst";
import NoteIcons from "../atoms/NoteIcons";
import addIcon from "../atoms/img/addIcon.svg";
import personaddIcon from "../atoms/img/personaddIcon.svg";
import paintIcon from "../atoms/img/paintIcon.svg";
import imgIcon from "../atoms/img/imgIcon.svg";
import archiveIcon from "../atoms/img/archiveIcon.svg";
import moreIcon from "../atoms/img/moreIcon.svg";
const Note = () => {
  return (
    <>
      <div className="note">
        <div className="take-note">
          <TakeNoteFirst />
          <div className="second-block">
            <input type="text" placeholder="Take a note..." />
          </div>
          <div className="third-block">
            <div className="iconCom">
              <NoteIcons icon={addIcon} />
              <NoteIcons icon={personaddIcon} />
              <NoteIcons icon={paintIcon} />
              <NoteIcons icon={imgIcon} />
              <NoteIcons icon={archiveIcon} />
              <NoteIcons icon={moreIcon} />
            </div>
            <div className="btn">
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;

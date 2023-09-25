import React, { useState } from "react";
import styles from "./Note.css";
import TakeNoteFirst from "./TakeNoteFirst";
import NoteIcons from "../atoms/NoteIcons";
import addIcon from "../atoms/img/addIcon.svg";
import personaddIcon from "../atoms/img/personaddIcon.svg";
import paintIcon from "../atoms/img/paintIcon.svg";
import imgIcon from "../atoms/img/imgIcon.svg";
import archiveThinIcon from "../atoms/img/archiveThinIcon.svg";
import moreIcon from "../atoms/img/moreIcon.svg";
import undoIcon from "../atoms/img/undoIcon.svg";
import redoIcon from "../atoms/img/redoIcon.svg";

const Note = () => {
  const [noteText, setNoteText] = useState("");
  const [cardText, setCardText] = useState([]);

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const insertText = (event) => {
    if (event.key === "Enter") {
      setCardText([...cardText, noteText]);
      setNoteText("");
    }
  };

  const handleAddCard = () => {
    if (noteText.trim() !== "") {
      setCardText([...cardText, noteText]);
      setNoteText("");
    }
  };

  return (
    <>
      <div className="note">
        <div className="take-note">
          <TakeNoteFirst />
          
          <div className="second-block">
            <input
              onKeyPress={insertText}
              value={noteText}
              onChange={handleChange}
              type="text"
              placeholder="Take a note..."
            />
          </div>

          <div className="third-block">
            <div className="iconCom">
              <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
              <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
              <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
              <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
              <NoteIcons icon={archiveThinIcon} alttxt="archiveThin-Icon-svg" />
              <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
              <NoteIcons icon={undoIcon} alttxt="undoIcon" />
              <NoteIcons icon={redoIcon} alttxt="redoIcon" />
            </div>
            <div className="btn">
              <button onClick={handleAddCard}>Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        {cardText.map((text, index) => (
          <div key={index} className="output">
            <p >{text}</p>
            <div className="taken-note-icons">
              <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
              <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
              <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
              <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
              <NoteIcons icon={archiveThinIcon} alttxt="archiveIcon-svg" />
              <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Note;

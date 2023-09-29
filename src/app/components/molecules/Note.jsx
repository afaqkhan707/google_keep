"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Note.css";
import NoteIcons from "../atoms/NoteIcons";
import addIcon from "../atoms/img/addIcon.svg";
import personaddIcon from "../atoms/img/personaddIcon.svg";
import paintIcon from "../atoms/img/paintIcon.svg";
import imgIcon from "../atoms/img/imgIcon.svg";
import archiveThinIcon from "../atoms/img/archiveThinIcon.svg";
import moreIcon from "../atoms/img/moreIcon.svg";
import undoIcon from "../atoms/img/undoIcon.svg";
import redoIcon from "../atoms/img/redoIcon.svg";
import deleteNoteIcon from "../atoms/img/deleteNoteIcon.svg";
import NoteBigIcon from "../atoms/NoteBigIcon";
import penIcon from "../atoms/img/penIcon.svg";
import imageIcon from "../atoms/img/imgIcon.svg";
import checkBoxIcon from "../atoms/img/checkBoxIcon.svg";

const Note = () => {
  const [showContent, setShowContetent] = useState(false);
  const [cardText, setCardText] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [noteTitleText, setTitleText] = useState("");
  const [cardStorageData, setCardStorageData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitleText(e.target.value);
  };

  useEffect(() => {

      if(cardData.length > 0){
        cardData.forEach((e)=>{
          localStorage.setItem("cardData", JSON.stringify([...cardStorageData, e]));
        })
      }
      const newCardStorageData = [];
      newCardStorageData.push(JSON.parse(localStorage.getItem('cardData')))
      setCardStorageData(newCardStorageData)
  }, [cardData]);

  useEffect(()=>{
    console.log(cardStorageData)
  }, [cardStorageData])

  const handleAddCard = () => {
    const newCardData = [
      ...cardData,
      { title: noteTitleText, description: noteText },
    ];
    setCardData(newCardData);

    if (noteText && noteTitleText) {
      const newNote = { noteTitleText, noteText };
      setCardText([...cardText, newNote]);
      setTitleText("");
      setNoteText("");
      console.log(
        "New Add Note is Added",
        "Title Length:",
        newNote.noteText.length,
        "&& Note Text Length:",
        newNote.noteTitleText.length
      );
    }
  };

  const handleDeleteCard = (index) => {
    const newArray = cardText.filter((e, i) => i != index);
    setCardText(newArray);
  };

  const handleShowContent = () => {
    setShowContetent(true);
  };

  const handleHideContent = () => {
    setShowContetent(false);
  };

  return (
    <>
      <div className="note">
        <div className="take-note">
          {showContent && (
            <div className="first-block">
              <input
                type="text"
                onChange={handleTitleChange}
                placeholder="Title"
                value={noteTitleText}
              />
              <NoteBigIcon alttext="pinIcon-svg" />
            </div>
          )}
          <div className="second-block">
            <input
              value={noteText}
              onChange={handleNoteChange}
              type="text"
              placeholder="Take a note..."
              onClick={handleShowContent}
            />
            {showContent || (
              <>
                <div className="second-block-icon">
                  <Image src={checkBoxIcon} alt="" />
                </div>
                <div className="second-block-icon">
                  <Image src={penIcon} alt="" />
                </div>
                <div className="second-block-icon">
                  <Image src={imageIcon} alt="" />
                </div>
              </>
            )}
          </div>

          {showContent && (
            <div className="third-block">
              <div className="iconCom">
                <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
                <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
                <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
                <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
                <NoteIcons
                  icon={archiveThinIcon}
                  alttxt="archiveThin-Icon-svg"
                />
                <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
                <NoteIcons icon={undoIcon} alttxt="undoIcon" />
                <NoteIcons icon={redoIcon} alttxt="redoIcon" />
              </div>
              <div className="btn">
                <button onClick={handleHideContent}>Close</button>
                <button onClick={handleAddCard}>Add Note</button>
              </div>
            </div>
          )}
        </div>
      </div>
     {/* {cardStorageData.length > 0 &&  <div className="card">
        {cardStorageData[0].map((item, index) => (
          <div key={index} className="output">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <div className="taken-note-icons">
              <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
              <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
              <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
              <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
              <NoteIcons icon={archiveThinIcon} alttxt="archiveIcon-svg" />
              <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
              <NoteIcons
                onClick={() => handleDeleteCard(index)}
                icon={deleteNoteIcon}
                alttxt="deleteNoteIcon"
              />
            </div>
          </div>
        ))}
      </div>} */}
    </>
  );
};

export default Note;

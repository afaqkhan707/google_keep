import React from "react";
import SidebarIcons from "../atoms/SidebarIcons";
import hamburgerIcon from "../atoms/img/lightbulbIcon.svg";
import reminderIcon from "../atoms/img/notificationIcon.svg";
import editIcon from "../atoms/img/editIcon.svg";
import archiveIcon from "../atoms/img/archiveIcon.svg";
import deleteIcon from "../atoms/img/deleteIcon.svg";

const Sidebar = () => {
 
  return (
    <>
    <div className="left-side-bar">
      <div>
        <SidebarIcons icon={hamburgerIcon} text="Notes" />
        <SidebarIcons icon={reminderIcon} text="Reminders" />
        <SidebarIcons icon={editIcon} text="Edit Labels" />
        <SidebarIcons icon={archiveIcon} text="Archive" />
        <SidebarIcons icon={deleteIcon} text="Trash" />
      </div>
      <div className="license">
        <p> Open Source License</p>
      </div>
      </div>
    </>
  );
};

export default Sidebar;

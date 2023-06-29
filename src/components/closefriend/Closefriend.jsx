import React from "react";
import "./Closefriend.css";

function Closefriend({user}) {
  return (
    <>
      <li className="sidebarfriendlistitem">
        <img src={user.profilepicture} alt="" className="sidebarfriendimage" />
        <span className="sidebarfriendname">{user.username}</span>
      </li>
    </>
  );
}

export default Closefriend;

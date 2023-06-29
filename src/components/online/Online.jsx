import React from "react";
import './Online.css';



function Online({user}){
    return(
        <>
            <li className="rightbaronlinefriends">
                <div className="rightbaronlineimagecontainer">
                    <img src={user.profilepicture} alt="" className="rightbaronlinefriendimage" />
                    <span className="rightbaronlinefriendbadge"></span>
                </div>
                <span className="rightbaronlinefriendtext">{user.username}</span>
            </li>
        </>
    );
};


export default Online;
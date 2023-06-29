import React from "react";
import './Sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../Dummydata';
import Closefriend from "../closefriend/Closefriend";


function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <div className="sidebarwrapper">
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <RssFeedIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Feed</span>
                        </li>
                        <li className="sidebarlistitem">
                            <ChatIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Chat</span>
                        </li>
                        <li className="sidebarlistitem">
                            <PlayCircleIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Video</span>
                        </li>
                        <li className="sidebarlistitem">
                            <GroupIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Group</span>
                        </li>
                        <li className="sidebarlistitem">
                            <BookmarksIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Bookmarks</span>
                        </li>
                        <li className="sidebarlistitem">
                            <HelpOutlineIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Questions</span>
                        </li>
                        <li className="sidebarlistitem">
                            <WorkOutlineIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Jobs</span>
                        </li>
                        <li className="sidebarlistitem">
                            <EventIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Events</span>
                        </li>
                        <li className="sidebarlistitem">
                            <SchoolIcon className="sidebaricon" />
                            <span className="sidebarlistitemtext">Courses</span>
                        </li>
                    </ul>
                    <button className="sidebarbutton">Show More</button>
                    <hr className="sidebarhr" />
                    <ul className="sidebarfriendlist">
                        {Users.map((u) => (
                            <Closefriend key={u.id} user={u} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};



export default Sidebar;
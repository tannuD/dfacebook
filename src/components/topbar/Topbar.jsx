import React from "react";
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Topbar(){
    return(
        <>
            <div className="topbarcontainer">
                <div className="topbarleft">
                    <span className="logo">D-facebook</span>
                </div>
                <div className="topbarcenter">
                    <div className="searchbar">
                        <SearchIcon className="searchicon" />
                        <input type='text' placeholder='Search for friends, post or video' className="searchinput" />
                    </div>
                </div>
                <div className="topbarright">
                    <div className="topbarLinks">
                        <span className="topbarLink">Home</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbaricons">
                        <div className="topbariconsitem">
                            <PersonIcon />
                            <span className="topbariconbadge">1</span>
                        </div>
                        <div className="topbariconsitem">
                            <ChatIcon />
                            <span className="topbariconbadge">1</span>
                        </div>
                        <div className="topbariconsitem">
                            <NotificationsIcon />
                            <span className="topbariconbadge">1</span>
                        </div>
                    </div>
                    <img src="assets/p1.jpg" alt="" className="topbarimage" />
                </div>
            </div>
        </>
    );
};


export default Topbar;
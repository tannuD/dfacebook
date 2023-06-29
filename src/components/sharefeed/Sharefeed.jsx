import React from "react";
import "./Sharefeed.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Sharefeed() {
  return (
    <>
      <div className="share">
        <div className="sharewrapper">
          <div className="sharetop">
            <img src="/assets/p1.jpg" alt="" className="shareimage" />
            <input
              placeholder="What's in your mind Dev"
              className="shareinput"
            />
          </div>
          <hr className="sharehr" />
          <div className="sharebotton">
            <div className="shareoptions">
              <div className="shareoption">
                <PermMediaIcon htmlColor="tomato" className="shareicon" />
                <span className="shareoptiontext">Photo's and Video's</span>
              </div>
              <div className="shareoption">
                <LabelIcon htmlColor="blue" className="shareicon" />
                <span className="shareoptiontext">Tag</span>
              </div>
              <div className="shareoption">
                <LocationOnIcon htmlColor="green" className="shareicon" />
                <span className="shareoptiontext">Location</span>
              </div>
              <div className="shareoption">
                <EmojiEmotionsIcon htmlColor="goldenrod" className="shareicon" />
                <span className="shareoptiontext">Feelings</span>
              </div>
            </div>
            <button className="sharebutton">Share</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sharefeed;

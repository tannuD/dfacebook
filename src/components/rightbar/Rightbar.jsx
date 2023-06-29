import React from "react";
import Online from "../online/Online";
import "./Rightbar.css";
import {Users} from '../../Dummydata';
function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarwrapper">
          <div className="birthdaycontainer">
            <img src="assets/prince.jpg" alt="" className="birthdayimage" />
            <span className="birthdaytext">
              <b>Pince raj verma</b> and <b>3 others friends</b> have birthday
              today.
            </span>
          </div>
          <img src="assets/add.jpg" alt="" className="rightbarad"/>
          <h4 className="rightbartitle">Online Friends</h4>
          <ul className="rightbaronlinefriendlist">
              {Users.map(u=>(
                <Online key={u.id} user={u} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Rightbar;

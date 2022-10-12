import React from "react";
import "./SupportService.css";
import theNextYou from "../images/SupportServiceImages/main image.png";
import hostel from "../images/SupportServiceImages/hotel.png";

export default function StudentMenu() {
  return (
    <div>
      <h1 className="supporTitle">
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support Service
      </h1>
      <div class="left-nav-bar">
        <div className="left-button-set">
          <a href="/HostalDetails">
            <button className="left-nav-bar-button ">🏢 Manage Hostels </button>
          </a>{" "}
          <br />
          <a href="/TransportDetails">
            <button className="left-nav-bar-button ">
              🚎 Manage Transport
            </button>
          </a>{" "}
          <br />
          <a href="/ContactDetails">
            <button className="left-nav-bar-button ">📞 Contact Details </button>
          </a>{" "}
          <br />
          <a href="#">
            <button className="left-nav-bar-button ">👉 Other</button>
          </a>
        </div>
      </div>
      <div className="next-you-image">
        <img src={theNextYou} alt="nextYouImage" />
      </div>{" "}
      <br />
      <div className="moduleMenu">
        <a href="">
          <button className="spm_module_button">View profile </button>
        </a>
        <br />
      </div>
    </div>
  );
}

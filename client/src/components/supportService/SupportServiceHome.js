import React from "react";


export default function SupportServiceHome() {
  return (
    <div style={{ paddingLeft: "220px", paddingTop: "80px", background: "" }}>
      <h2>
        {" "}
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{" "}
        <b>
          <i>Support Service Home </i>
        </b>
      </h2>
     
      <br></br>
      <br></br>
    
      <div className="navItem">
        <a href="/HostalDetails">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "140%",
              height: "70px",
              marginTop: "20px",
              borderColor: "black",
              backgroundColor: "",
            }}
          >
            <b>Manage Hostel Services </b>
          </button>
          <br></br>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="#">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "140%",
              height: "70px",
              marginTop: "20px",
              backgroundColor: "",
              borderColor: "black",
             
            }}
          >
            <b> Manage Transport Service </b>
          </button>
          <br></br>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="#">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "140%",
              height: "70 px",
              marginTop: "20px",
              backgroundColor: "",
              borderColor: "black",
              
            }}
          >
            <b>Contact Details </b>
          </button>
        </a>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

import React from "react";


export default function SupportServiceHome() {
  return (
    <div style={{ paddingLeft: "220px", paddingTop: "80px" }}>
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
        <a href="/">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "140%",
              height: "135px",
              marginTop: "20px",
              borderBottomLeftRadius: "30px",
              borderColor: "black",
              backgroundColor: "#8000ff",
            }}
          >
            <b>Manage Hostel Services </b>
          </button>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="/">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "140%",
              height: "135px",
              marginTop: "20px",
              backgroundColor: "#8000ff",
              borderColor: "black",
              borderTopRightRadius: "30px",
            }}
          >
            <b> Manage Transport Service </b>
          </button>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="/">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "140%",
              height: "135px",
              marginTop: "20px",
              backgroundColor: "#8000ff",
              borderColor: "black",
              borderBottomLeftRadius: "30px",
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

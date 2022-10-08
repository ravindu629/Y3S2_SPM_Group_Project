import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import image from "../images/admin.jpg";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AdminMenu() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    adminId: "",
    nic: "",
    gender: "male",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const loginMenuBtn = {
    borderRadius: 35,
    backgroundColor: "white",
    padding: "10px 30px",
    color: "black",
    fontWeight: "bold",
  };

  let navigate = useNavigate();

  const id = "6310ae59a26163b8328af642";

  useEffect(() => {
    function getUser() {
      axios
        .get(`http://localhost:5000/api/admins/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUser();
  }, []);

  return (
    <div>
      {" "}
      <div className="adminMenu">
        <div className="heading">Admin Menu</div>
        <div className="admBtn">
          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/staffMembers");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Staff Members</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/stds");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Students</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/admins");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Admins</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/addStaffMember");
            }}
          >
            <div className="adminMenuBtns">{">"} Register New Staff Member</div>
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/addAdmin");
            }}
          >
            <div className="adminMenuBtns"> {">"} Register New Admin</div>
          </button>
        </div>
      </div>
      <div className="admProfile">
        <p className="heading">Profile</p>
        <img className="adminMenuImg" src={image} />
        <div className="profileIcon">
          <Button
            variant="contained"
            style={loginMenuBtn}
            startIcon={<AccountCircleIcon />}
            // onClick={}
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

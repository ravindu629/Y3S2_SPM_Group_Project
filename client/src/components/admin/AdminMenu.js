import React from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

export default function AdminMenu() {
  let navigate = useNavigate();

  return (
    <div className="adminMenu">
      <div className="heading">Admin Menu</div>
      <div className="admBtn">
        <button type="button" className="btn btn-light btn-lg btn-block">
          <div className="adminMenuBtns">{">"} Manage Staff Members</div>
        </button>

        <button type="button" className="btn btn-light btn-lg btn-block">
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
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./student.css";

function AddStudent() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    studentId: "",
    nic: "",
    faculty: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/students", user)
      .then(() => {
        alert("student added");
        navigate("/studentLogin");
      })
      .catch((err) => {
        alert(err);
      });

    setUser({
      fName: "",
      lName: "",
      studentId: "",
      nic: "",
      faculty: "",
      gender: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="formStyle">
        <div className="heading">Register Student</div>
        <div className="formStyle_1">
          <form onSubmit={sendData}>
            <div className="form-group row">
              <label for="fname" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fName"
                  placeholder="enter first name"
                  onChange={handleChange}
                  value={user.fName}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="lname" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name="lName"
                  placeholder="enter last name"
                  onChange={handleChange}
                  value={user.lName}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="stdid" className="col-sm-2 col-form-label">
                Student Id
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="stdid"
                  name="studentId"
                  placeholder="enter student id"
                  onChange={handleChange}
                  value={user.studentId}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="NIC" className="col-sm-2 col-form-label">
                NIC
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="NIC"
                  name="nic"
                  placeholder="enter nic"
                  onChange={handleChange}
                  value={user.nic}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="fac" className="col-sm-2 col-form-label">
                Faculty
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div onChange={handleChange}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="faculty"
                    value="FOC"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    FOC
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="faculty"
                    value="FOE"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    FOE
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="faculty"
                    value="FOB"
                    id="flexRadioDefault3"
                  />
                  <label class="form-check-label" for="flexRadioDefault3">
                    FOB
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label for="NIC" className="col-sm-2 col-form-label">
                Gender
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div onChange={handleChange}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="M"
                    id="flexRadioDefault11"
                    onChange={handleChange}
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault11">
                    Male
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="F"
                    id="flexRadioDefault22"
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="flexRadioDefault22">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label for="mail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="mail"
                  name="email"
                  placeholder="enter email address"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="phone" className="col-sm-2 col-form-label">
                Phone No
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phoneNumber"
                  placeholder="enter phone number"
                  onChange={handleChange}
                  value={user.phoneNumber}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="pass" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  name="password"
                  placeholder="enter password"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function Admins() {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getUsers() {
      axios
        .get("http://localhost:5000/api/admins")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUsers();
  }, []);

  function deleteUser(_id) {
    axios
      .delete("http://localhost:5000/api/admins/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("admin deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setUsers(users.filter((user) => user._id !== _id));
  }

  return (
    <div className="tableStyle">
      <div className="staff_heading">All Admins Details</div>
      <div>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Admin ID</th>
              <th scope="col">NIC</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>

              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.adminId}</td>
                  <td>{user.nic}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "",
                        padding: "6px 18px",
                        marginRight: "18px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      startIcon={<EditIcon />}
                      onClick={() => {
                        navigate(`/updateAdmin/${user._id}`);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "brown",
                        padding: "6px 18px",
                        marginRight: "18px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this record?"
                          )
                        )
                          deleteUser(user._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admins;

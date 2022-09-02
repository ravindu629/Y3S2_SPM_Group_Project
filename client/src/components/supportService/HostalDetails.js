import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


 function HostalDetails () {
    const [Hostal, setHostal, setUsers] = useState([]);

    useEffect(() => {
        function getHostals() {
            axios
                .get("http://localhost:5000/api/hostaldetails")
                .then((res) => {
                    setHostal(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getHostals();
    }, []);


    function deleteHostal(_id) {
        axios
          .delete("http://localhost:5000/api/hostaldetails/" + _id)
          .then((res) => {
            console.log(res.data);
    
            alert("Details deleted");
          })
          .catch((err) => {
            alert(err);
          });
    
        setUsers(Hostal.filter((hostal) => hostal._id !== _id));
      }
    


    return (
        <div className="all">
            <div  >
                <a href="/Addhostal">
                    <button type="button" className="">
                        <b>Add Hostel</b>
                    </button>
                </a>  
               
                <a href="#">
                    <button type="button" className="">
                        <b> Get Report</b>
                    </button>
                </a>         
                       
                
            </div>

            <h2 className="heading">Available Hostels Details</h2><br />

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Hostal ID</th>
                        <th scope="col">Hostal Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Bedrooms</th>
                        <th scope="col">Bathrooms</th>
                        <th scope="col">Persons</th>
                        <th scope="col">Charge per person</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Update or delete</th>
                       
                       
                       
                    </tr>
                </thead>

                <tbody className="table-light">
                    {Hostal.map((hostal, index) => {
                        return (
                            <tr key={hostal._id}>
                                <td>{index + 1}</td>
                                <td>{hostal.hostalID}</td>
                                <td>{hostal.hostalName}</td>
                                <td>{hostal.address}</td>
                                <td>{hostal.bedRooms}</td>
                                <td>{hostal.bathrooms}</td>
                                <td>{hostal.persons}</td>
                                <td>{hostal.charge}</td>
                                <td>{hostal.contactNo}</td>

                                <td>
                  <a
                    className="btn btn-warning"
                    href={`/Updatehostal/${hostal._id}`}
                  >
                    <EditIcon />
                    &nbsp;&nbsp; <b>Update</b>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this record?"
                        )
                      )
                        deleteHostal(hostal._id);
                    }}
                  >
                    <DeleteForeverIcon />
                    <b> Delete </b>
                    </a>
                   
                  </td>
                              
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    )
}
export default HostalDetails;
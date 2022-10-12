import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
//import "./App.css";


 function UpdateHostal(){

    const [valid, setValid] = useState(false);
    const [hostal, setHostal] = useState({
        hostalID: "",
        hostalName: "",
        address: "",
        bedRooms: "",
        bathrooms: "",
        persons: "",
        charge: "",
        contactNo: "",
    });

    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        function getHostalServices() {
          axios
            .get(`http://localhost:5000/api/hostaldetails/${id}`,)
            .then((res) => {
              setHostal(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getHostalServices();
      }, []);

      function updateData(e) {
        e.preventDefault();


        axios
          .put(`http://localhost:5000/api/hostaldetails/${id}`,hostal)
          .then(() => {
            alert("Recode updated");
            navigate("/HostalDetails");
          })
          .catch((err) => {
            alert(err);
          });

     

      }
      function handleChange(event) {
        const { name, value } = event.target;
    
        setHostal((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }

      return (

    <div class="supAddMarksForm">
      <br></br>
         <h2 className="heading"> &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;   Update Hostel Details</h2>

        <div className="form">  
       <div className="formStyle">
           <form onSubmit={updateData}>
           <div class="form-group row">
           <label for="hostalID" className="col-sm-2 col-form-label">
          <b>Hostel Id </b>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hostalID"
                name="hostalID"
                placeholder="enter hostel id"
                onChange={handleChange}
                value={hostal.hostalID}
                disabled
              />
            </div>
          </div>

          <div class="form-group row">
          <label for="hostalName" className="col-sm-2 col-form-label">
            <b>Hostel Name </b>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hostalName"
                name="hostalName"
                placeholder="enter hostal name"
                onChange={handleChange}
                value={hostal.hostalName}
                required
              />
            </div>
          </div>

          <div class="form-group row">
          <label for="Address" className="col-sm-2 col-form-label">
            <b> Address </b>
            </label>
            <div className="col-sm-10">
              <input
                type="Text"
                className="form-control"
                id="Address"
                name="address"
                placeholder="enter address"
                onChange={handleChange}
                value={hostal.address}
                required
              />
            </div>
          </div>

          <div class="form-group row">
          <label for="bedRooms" className="col-sm-2 col-form-label">
           <b>  Bedrooms </b>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="bedRooms"
                name="bedRooms"
                placeholder="enter bedrooms"
                onChange={handleChange}
                value={hostal.bedRooms}
                required
              />
            </div>
          </div>

          <div class="form-group row">
          <label for="bathrooms" className="col-sm-2 col-form-label">
           <b> Bathrooms  </b>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                maxlength="3"
                id="bathrooms"
                name="bathrooms"
                placeholder="enter bathrooms"
                onChange={handleChange}
                value={hostal.bathrooms}
                required
              />
            </div>
          </div>
            
          <div class="form-group row">
          <label for="persons" className="col-sm-2 col-form-label">
              <b> Person </b>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="persons"
                name="persons"
                placeholder="enter persons"
                onChange={handleChange}
                value={hostal.persons}
                required
              />
            </div>
          </div>
          
          <div class="form-group row">
          <label for="charge" className="col-sm-2 col-form-label">
          <b> price </b>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="charge"
                name="charge"
                placeholder="enter charge"
                onChange={handleChange}
                value={hostal.charge}
                required
              />
            </div>


            

          </div>


          <div class="form-group row">
          <label for="contactNo" className="col-sm-2 col-form-label">
             <b>  Contact No </b>
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control"
                id="contactNo"
                name="contactNo"
                placeholder="enter contact no"
                onChange={handleChange}
                value={hostal.contactNo}
                required
              />
            </div>


            

          </div>
      
          
          <div class="form-group row">
         
            <div  className="updateBtn">
              
              <button type="submit" class="btn btn-primary" > 
              &nbsp;&nbsp;
                Update
                &nbsp;&nbsp;
              </button>  

         

            </div>
          </div>

           
           </form>

       </div>
       </div>
    </div>


      );
    

};

export default UpdateHostal;


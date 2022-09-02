import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function AddHostal() {

  const [valid, setValid] = useState(false);
  const [hostal, sethostal] = useState({
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

  function sendData(e) {
    e.preventDefault()

    axios
      .post("http://localhost:5000/api/hostaldetails",hostal)
      .then(() => {
        alert("Hostel details are added");
        setValid(true);
        navigate("/HostalDetails");
      })
      .catch((err) => {
        alert(err);
      });

      sethostal({
    hostalID: "",
    hostalName: "",
    address: "",
    bedRooms: "",
    bathrooms: "",
    persons: "",
    charge: "",
    contactNo: "",
      });

    }
    function handleChange(event) {
      const { name, value } = event.target;
  
      sethostal((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  
    

    
  
  
  
  
  return (
    <div className="">
    <br></br>
      <div className="supDownloadbtn">
      <a href="https://drive.google.com/drive/folders/1-YTswm8zPPp4P7eodwATGxHIiXc5wXuI?usp=sharing">
      <button class="btn btn-warning"> 📰 <b> Download Submitted Document </b> </button>

      </a>
      </div>
      <div className="formStyle">
        <h2 className="heading"> Add Hostel </h2>
        <br></br>
        <form onSubmit={sendData}>
     

        <div className="form-group row">
            <label for="hostalID" className="col-sm-2 col-form-label">
          Hostel Id
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
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="hostalName" className="col-sm-2 col-form-label">
            Hostel Name
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
          <div className="form-group row">
            <label for="Address" className="col-sm-2 col-form-label">
            Address
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

          <div className="form-group row">
            <label for="bedRooms" className="col-sm-2 col-form-label">
            Bedrooms
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

          <div className="form-group row">
            <label for="bathrooms" className="col-sm-2 col-form-label">
            Bathrooms
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


          <div className="form-group row">
            <label for="persons" className="col-sm-2 col-form-label">
              Person
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

          <div className="form-group row">
            <label for="charge" className="col-sm-2 col-form-label">
          Charge per person
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


            <div className="form-group row">
            <label for="contactNo" className="col-sm-2 col-form-label">
              Contact No
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
            
          </div>
<br></br>
          <div className="form-group row">
        
            <div className="addmarkSubBtn">
           
              <button type="submit" className="btn btn-primary">
              &nbsp;&nbsp;
                Add
                &nbsp;&nbsp;
              </button>
             
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}
export default  AddHostal;

import React from 'react'
import sliitlogo from "../images/sliit.png";
import "./SupportService.css";

const ContactDetails = () => {
  return (
    <div>
      <div class="SupervisorSupportServices">
        <div class="StdSup">
          <h2 class="SuperServicesH2"> 🧑‍💻 Support Services</h2>
          <br />
          <h3><pre> 🌐 SLIIT Admin Support</pre></h3><br />
          <h4><pre>      https://Support.sliit.lk</pre></h4>
          <h3><pre> 📞 Hotline No</pre></h3><br />
          <h4><pre>      8.30 AM to 5.00 PM <br /></pre></h4>
          <h4><pre>      • 011 754 4801</pre></h4>
          <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>

        </div>
        <div className="supmenuSliitlogo">
          <img src={sliitlogo} />
          </div>
      </div>
    </div>
  )
}

export default ContactDetails

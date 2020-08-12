import React from "react";
import "./Contactstyle.css";
import ContactIcon from "../Common_Images/contact.svg";
import Facebookicon from "../Common_Images/facebook.svg";
import PhoneIcon from "../Common_Images/phone.svg";
import Plane from "../Common_Images/plane.svg";
function ContactUs() {
  return (
    <div id="mainContainer">
      <div className="firstContacticons">
        <span className="component fontinte" >Follow us on:</span>
        <img src={ContactIcon} className="component" fill="aqua"    alt="Icon"  />
        <img src={Facebookicon} className="component" fill="aqua"   alt="Icon"  />
        <img src={PhoneIcon} className="component" fill="aqua"      alt="Icon"  />
        <img src={Plane} className="component" fill="aqua"          alt="Icon"  />
      </div>
      <div className="details">
     <span >.</span> F.A.Q <span >.</span> Cookies policy<span >.</span> Legal terms <span >.</span> Privacy Policy <span >.</span> English
      </div>
        <div className="details" >
        <p>Contact us :89035742934 </p>
        <p>Mail: oidhfapsdhf@oghasidf.com </p>
        <p>Something : dposafjp43</p>
        </div>

    </div>
  );
}

export default ContactUs;

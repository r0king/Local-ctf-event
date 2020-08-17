import React from "react";
import theGraph from "../Common_icons/topplayers.png";
import theMedal from "../Common_icons/medal.png";
import Bell from "../Common_icons/Icons/bell.svg"
import Email from "../Common_icons/Icons/email.svg"
function HeadUser() {
  return (
    <div>
      <section id="mainDash">
        <div id="welcome">
          <header>Welcome Back Hacker</header>
          <p>Security used to be an inconvenience sometimes,but now it's neccessity all the time</p>
          <p>Martina Navratilova</p>
          </div>
        <div id="ProgressNstat">
          <li>Your Progress :</li>
          <li>Completed :</li>
          <li>More :</li>
          <li>Something Else:</li>
          <li>Something more</li>
          <div className="Status">
            <img src={theMedal} alt="Status Gold" />
            Gold
          </div>
        </div>
        <div id="Notification">
          <div>Notification
          <img src={Bell} alt=""/>
          </div>
          <div>Mail
          <img src={Email} alt=""/>
          </div>
        </div>
        <div id="tops">
          <img src={theGraph} alt="player ranking not found" />
          <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeadUser;

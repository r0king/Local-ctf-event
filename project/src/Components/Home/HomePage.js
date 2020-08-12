import React from 'react';
import './homestyle.css'

function HomePage() {
    return (
      <div className="wholeinit">
        <div
         className="mainhome " >
          <h1 className="welcome">
            Welcome To World ctf
          </h1>
          <p className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          </div>
          <div className="arrow_icon">
          <svg height="32px" viewBox="0 0 16 16" className="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fillRule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
        <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
        </svg>
          </div>
      </div>
    );
  }
  
  export default HomePage;
  
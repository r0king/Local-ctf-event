import React from 'react';
import HomePage from '../Home/HomePage';
import ContentSection from'../Content/ContentSection';
import ContactUs from '../Contact/ContactUs';
function mainEntry() {
  return (
    <div>
       <HomePage />
       <div className="fewposition">
       <span className="Head_challenge"> All Challenges</span>
       <ContentSection />
       </div>
       <ContactUs/>
    </div>
  );
}

export default mainEntry;

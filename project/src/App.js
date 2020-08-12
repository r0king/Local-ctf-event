import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Components/Home/HomePage';
import ContentSection from'./Components/Content/ContentSection';
import ContactUs from './Components/Contact/ContactUs'
function App() {
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

export default App;

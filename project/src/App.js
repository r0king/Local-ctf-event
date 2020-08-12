import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Components/Home/HomePage';
import ContentSection from'./Components/Content/ContentSection';

function App() {
  return (
    <div>
       <HomePage />
       <ContentSection />
    </div>
  );
}

export default App;

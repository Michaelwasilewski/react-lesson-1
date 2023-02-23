import './App.css';
import React from 'react';
// import DefaultProfilePic from './components/DefaultProfilePic';
// import ProfileName from './components/ProfileName';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <ProfileName name="Michael" />
    //   <DefaultProfilePic altText="Nice" />
    //   <ProfileName name="Sander" />
    //   <DefaultProfilePic altText="Shmice" />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

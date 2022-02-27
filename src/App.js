import React, { useState } from 'react'
import './App.css';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import Footer from './components/footer';
// import Work from './components/work';

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = ()=> {
    setToggle(!toggle)
  }

  return (
    <div className={ toggle === false ? "light" : "dark"}>
          <Navbar handleToggle={handleToggle} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          {/* <Route path="work" element={<Work />} /> */}
        </Routes>
        
        <Footer handleToggle={handleToggle} toggle={toggle}/>
     
    </div >
  );
}

export default App;

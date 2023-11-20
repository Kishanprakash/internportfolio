import React from "react";
import Aboutus from "./Components/Aboutus/Aboutus.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Skills from "./Components/skills/Skills.js";
import Home from "./Components/home/Home.js";
import Contact from "./Components/contact/Contact.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact/>}/>
          {/* Remove the route for Navbar as it's a part of the layout */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Corporate from "./components/Corporate";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product" element={<Products />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/Contact" element={<Contact />} />

        Contact
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/education" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/certifications" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
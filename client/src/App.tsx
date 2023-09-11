// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Properties from "./components/Properties";
import Navbar from "./components/Navbar";
import PropertyDetails from "./components/PropertyDetails";
import SellProperty from "./components/SellProperty";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertyDetails" element={<PropertyDetails />} />
        <Route path="/sellProperty" element={<SellProperty />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import Home from "./views/Home.tsx";
import PupilDetails from "./views/PupilDetails.tsx";
import { Route, Routes } from 'react-router-dom';
import AddPupil from "./views/AddPupil.tsx";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pupil/:id" element={<PupilDetails />} /> 
      <Route path="/add" element={<AddPupil />} />
    </Routes>
  </div>
  );
}

export default App;

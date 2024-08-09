import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import CreateLocator from './componentes/CreateLocator';
// index.tsx ou App.tsx
import 'leaflet/dist/leaflet.css';


function App() {
  
  return (
     
      <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create-location" element={< CreateLocator/>} />
    </Routes>
    </Router>
   
    
  );
}

export default App;





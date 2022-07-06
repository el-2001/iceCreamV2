import React from 'react';
import "beercss";
import "material-dynamic-colors";
import {Home} from './features/Home/Home.js';
import { Navbar } from './features/Navbar/Navbar.js';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
    </div>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;

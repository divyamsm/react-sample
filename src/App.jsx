import React from "react";

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"; 

//import statement for material ui
import CssBaseline from '@mui/material/CssBaseline';

import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Home from './Home';

import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <React.Fragment>
      <CssBaseline/>
      
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-two" element={<PageTwo/>} />
          <Route path="/page-three" element={<PageThree/>}/>
        </Routes>
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
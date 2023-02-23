
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from './components/Homepage';
import Settings from './components/Settings';
import Layout from './components/Layout';
import './App.css';
import './mediaq.css';





function App() {
  return (

    <BrowserRouter>
    <Routes>
      
        <Route index element={<Homepage />} />
        <Route path="settings" element=
        {<Settings />} />

<Route path="layout" element=
        {<Layout />} />


        {/* 
        <Route path="*" element={<NoPage />} /> */}
     
    </Routes>
  </BrowserRouter>
    // <div>
      
    //   < Homepage />
      
        
      
     
    // </div>
  );
}

export default App;

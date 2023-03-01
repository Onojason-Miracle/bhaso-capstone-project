import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import Layout from "./components/Layout";
import Home from "./components/Home";
import "./App.css";
import "./mediaq.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />

          <Route path="layout" element={<Layout />} />

          {/* 
        <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

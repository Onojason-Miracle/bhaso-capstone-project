import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "./mediaq.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoPage from "./components/NoPage";
import ActionPage from "./components/ActionPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="homepage" element={<Home />} />

          <Route path="login" element={<Login />} />

          <Route path="signup" element={<Signup />} />


          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

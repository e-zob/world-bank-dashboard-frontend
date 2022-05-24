import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route path="create-account" element={<CreateAccount />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

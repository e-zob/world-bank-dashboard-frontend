import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAccount from "./Pages/CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Login from "./Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route path="create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

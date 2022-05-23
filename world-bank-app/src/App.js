import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login.jsx";

(
  <Router>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="create-account" element={<CreateAccount />} />
      </Route>
    </Routes>
  </Router>
),
  function App() {
    return;
  };

export default App;

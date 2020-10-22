import React from "react";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;

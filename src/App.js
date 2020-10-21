import React from 'react';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Dashboard/>
    </div>
  );
}

export default App;

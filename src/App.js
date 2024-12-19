import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Adjustments from './components/Adjustments';
import Rules from './components/Rules';
import Reports from './components/Reports';
import CreateRule from './components/CreateRule';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adjustments" element={<Adjustments />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/create-rule" element={<CreateRule />} />
      </Routes>
    </Router>
  );
};

export default App;

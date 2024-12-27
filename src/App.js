import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Adjustments from './components/Adjustments';
import Reports from './components/Reports';
import Rules from './components/Rules';
import CreateRule from './components/CreateRule';
import GeneratedFiles from './components/GeneratedFiles';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adjustments" element={<Adjustments />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/create-rule" element={<CreateRule />} />
        <Route path="/generated-files" element={<GeneratedFiles />} />
      </Routes>
    </Router>
  );
};

export default App;

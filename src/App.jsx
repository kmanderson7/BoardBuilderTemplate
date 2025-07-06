// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BoardBriefingBuilder from './BoardBriefingBuilder';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /brief */}
        <Route path="/" element={<Navigate to="/brief" />} />
        
        {/* Main editor route */}
        <Route path="/brief" element={<BoardBriefingBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;

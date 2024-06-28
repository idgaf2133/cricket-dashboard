// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MatchAnalysis from './pages/MatchAnalysis';
import PlayerStatistics from './pages/PlayerStatistics';
import TeamComparison from './pages/TeamComparison';
import NavigationBar from './pages/components/NavigationBar';
const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
         <NavigationBar/>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/match-analysis" element={<MatchAnalysis />} />
          <Route path="/player-statistics" element={<PlayerStatistics />} />
          <Route path="/team-comparison" element={<TeamComparison />} />
          {/* Add a default route or 404 page if needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;

// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from '../Homepage';
import MatchAnalysis from '../MatchAnalysis';
import PlayerStatistics from '../PlayerStatistics';
import TeamComparison from '../TeamComparison';

const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/match-analysis">Match Analysis</Link></li>
            <li><Link to="/player-statistics">Player Statistics</Link></li>
            <li><Link to="/team-comparison">Team Comparison</Link></li>
          </ul>
        </nav>

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

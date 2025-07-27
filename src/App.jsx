import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GoalDetails from './pages/GoalDetails';

function App() {
  return (
    <div className="app">
      <h1>🎯 Smart Goal Planner</h1>
      <nav>
        <Link to="/">🏠 Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals/:id" element={<GoalDetails />} />
      </Routes>
    </div>
  );
}

export default App;

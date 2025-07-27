import { useState, useEffect } from 'react';
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';

const Home = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/goals')
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div>
      <GoalForm onAddGoal={addGoal} />
      <GoalList goals={goals} onDeleteGoal={deleteGoal} />
    </div>
  );
};

export default Home;


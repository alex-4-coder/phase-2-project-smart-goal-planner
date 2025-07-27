import { useState } from 'react';

const GoalForm = ({ onAddGoal }) => {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      title,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      deadline
    };

    fetch('http://localhost:3001/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal)
    })
      .then(res => res.json())
      .then(data => {
        onAddGoal(data);
        setTitle('');
        setTargetAmount('');
        setDeadline('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Goal</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Goal Title" required />
      <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} placeholder="Target Amount" required />
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;

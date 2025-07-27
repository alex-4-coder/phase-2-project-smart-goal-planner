import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DepositForm from '../components/DepositForm';

const GoalDetails = () => {
  const { id } = useParams();
  const [goal, setGoal] = useState(null);
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/goals/${id}`)
      .then(res => res.json())
      .then(setGoal);

    fetch(`http://localhost:3001/deposits?goalId=${id}`)
      .then(res => res.json())
      .then(setDeposits);
  }, [id]);

  const handleDeposit = (deposit) => {
    setDeposits([...deposits, deposit]);
    const newAmount = goal.currentAmount + deposit.amount;

    fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentAmount: newAmount })
    }).then(() => {
      setGoal({ ...goal, currentAmount: newAmount });
    });
  };

  if (!goal) return <p>Loading...</p>;

  return (
    <div>
      <h2>{goal.title}</h2>
      <p>Target: ${goal.targetAmount}</p>
      <p>Current: ${goal.currentAmount}</p>
      <p>Deadline: {goal.deadline}</p>

      <DepositForm goalId={goal.id} onDeposit={handleDeposit} />

      <h3>Deposits</h3>
      <ul>
        {deposits.map(dep => (
          <li key={dep.id}>💰 ${dep.amount} on {dep.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalDetails;

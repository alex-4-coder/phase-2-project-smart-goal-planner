import { Link } from 'react-router-dom';

const GoalItem = ({ goal, onDelete }) => {
  const { id, title, currentAmount, targetAmount } = goal;
  const percentage = Math.min((currentAmount / targetAmount) * 100, 100).toFixed(1);

  const handleDelete = () => {
    fetch(`http://localhost:3001/goals/${id}`, { method: 'DELETE' })
      .then(() => onDelete(id));
  };

  return (
    <div className="goal-card">
      <h3>{title}</h3>
      <p>Progress: ${currentAmount} / ${targetAmount}</p>
      <div className="progress-bar" style={{ width: `${percentage}%` }}>{percentage}%</div>
      <Link to={`/goals/${id}`}>View Details</Link>
      <button onClick={handleDelete}>🗑️ Delete</button>
    </div>
  );
};

export default GoalItem;

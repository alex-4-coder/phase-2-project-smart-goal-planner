import GoalItem from './GoalItem';

const GoalList = ({ goals, onDeleteGoal }) => {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDeleteGoal} />
      ))}
    </div>
  );
};

export default GoalList;

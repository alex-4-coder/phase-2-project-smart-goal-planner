import React from "react";

function GoalCard({ goal, onDelete }) {
  const percent = (goal.savedAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.savedAmount;
  const daysLeft = Math.floor((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  const isUrgent = daysLeft <= 30 && !isOverdue && goal.savedAmount < goal.targetAmount;
  const isCompleted = goal.savedAmount >= goal.targetAmount;

  return (
    <div style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
      <h4>{goal.name}</h4>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount} | Saved: ${goal.savedAmount} | Remaining: ${remaining}</p>
      <div style={{ background: "#eee", width: "100%" }}>
        <div
          style={{
            width: `${percent}%`,
            background: percent >= 100 ? "green" : "blue",
            color: "white",
            padding: "0.2rem",
          }}
        >
          {Math.round(percent)}%
        </div>
      </div>
      <p>Deadline: {goal.deadline}</p>
      {isOverdue && <p style={{ color: "red" }}>⚠️ Overdue!</p>}
      {isUrgent && <p style={{ color: "orange" }}>⚠️ Less than 30 days remaining!</p>}
      {isCompleted && <p style={{ color: "green" }}>✅ Completed!</p>}
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
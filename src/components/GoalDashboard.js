import React, { useEffect, useState } from "react";
import AddGoalForm from "./AddGoalForm";
import DepositForm from "./DepositForm";
import GoalCard from "./GoalCard";
import OverviewPanel from "./OverviewPanel";

const API = "http://localhost:3000/goals";

function GoalDashboard() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setGoals);
  }, []);

  const addGoal = (newGoal) => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((r) => r.json())
      .then((data) => setGoals([...goals, data]));
  };

  const makeDeposit = (goalId, amount) => {
    const goalToUpdate = goals.find((g) => g.id === goalId);
    const updatedAmount = goalToUpdate.savedAmount + amount;

    fetch(`${API}/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then((r) => r.json())
      .then((updatedGoal) => {
        const updatedGoals = goals.map((g) => (g.id === goalId ? updatedGoal : g));
        setGoals(updatedGoals);
      });
  };

  const deleteGoal = (goalId) => {
    fetch(`${API}/${goalId}`, { method: "DELETE" }).then(() => {
      setGoals(goals.filter((g) => g.id !== goalId));
    });
  };

  return (
    <div>
      <OverviewPanel goals={goals} />
      <AddGoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={makeDeposit} />
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
      ))}
    </div>
  );
}

export default GoalDashboard;
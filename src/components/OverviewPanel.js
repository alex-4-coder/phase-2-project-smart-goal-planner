import React from "react";

function OverviewPanel({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>Overview</h3>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completed}</p>
    </div>
  );
}

export default OverviewPanel;

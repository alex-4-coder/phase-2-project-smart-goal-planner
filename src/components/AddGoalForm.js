import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      targetAmount: Number(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    onAddGoal(newGoal);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Goal</h3>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="targetAmount" placeholder="Target" value={formData.targetAmount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
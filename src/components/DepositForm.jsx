import { useState } from 'react';

const DepositForm = ({ goalId, onDeposit }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const deposit = {
      goalId,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0]
    };

    fetch('http://localhost:3001/deposits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deposit)
    })
      .then(res => res.json())
      .then(data => {
        onDeposit(data);
        setAmount('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Make a Deposit</h4>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;

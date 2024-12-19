import React from "react";

const Transactions = () => {
  const transactions = [
    { id: 1, type: "Credit", amount: 200, status: "Processed" },
    { id: 2, type: "Debit", amount: -100, status: "Failed" },
    { id: 3, type: "Retry", amount: -50, status: "Pending" },
  ];

  return (
    <div className="container">
      <header>Yellow Check - Transactions</header>
      <h2>Transaction List</h2>
      {transactions.map((transaction) => (
        <div className="card" key={transaction.id}>
          <p>Type: {transaction.type}</p>
          <p>Amount: ${transaction.amount}</p>
          <p>Status: {transaction.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;

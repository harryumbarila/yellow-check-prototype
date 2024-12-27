import React, { useState } from 'react';
import MenuHamburger from './MenuHamburger';
import Breadcrumbs from './Breadcrumbs';

const Dashboard = () => {
  // Fake transactions
  const fakeTransactions = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    merchant: `Merchant ${index + 1}`,
    date: `2023-12-${(index % 30) + 1}`,
    amount: (Math.random() * 1000).toFixed(2),
    type: index % 2 === 0 ? 'Debit' : 'Credit',
    status: index % 3 === 0 ? 'Pending' : index % 3 === 1 ? 'Executed' : 'Cancelled',
  }));

  const openTransactionDetails = (tx) => {
    alert(`
      Transaction Details:
      - ID: ${tx.id}
      - Merchant: ${tx.merchant}
      - Date: ${tx.date}
      - Amount: $${tx.amount}
      - Type: ${tx.type}
      - Status: ${tx.status}
      - Agent: ${tx.type === 'Credit' ? 'Automatic Rule' : 'Manual'}
    `);
  };

  return (
    <div style={{ marginLeft: '60px', padding: '20px', backgroundColor: '#F7F9FC', minHeight: '100vh' }}>
      <MenuHamburger />
      <Breadcrumbs />

      <header style={{ backgroundColor: '#375A7F', padding: '20px', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h1>Dashboard</h1>
      </header>

      {/* Transaction Summary*/}
      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Transaction Summary (Today)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#375A7F', color: 'white' }}>
              <th>ID</th>
              <th>Merchant</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {fakeTransactions.map((tx) => (
              <tr key={tx.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td>{tx.id}</td>
                <td>{tx.merchant}</td>
                <td>{tx.date}</td>
                <td>${tx.amount}</td>
                <td>{tx.type}</td>
                <td
                  style={{
                    color: '#375A7F',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                  onClick={() => openTransactionDetails(tx)}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;

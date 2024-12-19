import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuHamburger from './MenuHamburger';

const Dashboard = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, merchantName: 'Merchant A', cardLast4: '1234', amount: 150, reason: 'Terminal purchase', type: 'Debit' },
    { id: 2, merchantName: 'Merchant B', cardLast4: '5678', amount: -100, reason: 'Fee reimbursement', type: 'Credit' },
    { id: 3, merchantName: 'Merchant C', cardLast4: '6789', amount: 300, reason: 'Risk adjustment', type: 'Debit' },
    { id: 4, merchantName: 'Merchant D', cardLast4: '1234', amount: -50, reason: 'Billing correction', type: 'Credit' },
  ];
  

  return (
    <div style={{ backgroundColor: '#F7F9FC', height: '100vh' }}>
      <MenuHamburger />
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#375A7F', padding: '10px 20px', color: 'white' }}>
        <h1>Dashboard</h1>
        <img src="/logout.png" alt="Logout" style={{ height: '30px', cursor: 'pointer' }} onClick={() => navigate('/')} />
      </header>
      <div style={{ padding: '20px' }}>
        <button
          style={{
            backgroundColor: '#4A90E2',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            marginBottom: '20px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/adjustments')}
        >
          Create Transfer
        </button>
        <h2>Today's Transactions</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#375A7F', color: 'white' }}>
              <th>Merchant</th>
              <th>Last 4 Digits</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} style={{ backgroundColor: 'white', borderBottom: '1px solid #ddd' }}>
                <td>{transaction.merchantName}</td>
                <td>{transaction.cardLast4}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{transaction.reason}</td>
                <td>
                  <button style={{ backgroundColor: '#4A90E2', color: 'white', border: 'none', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}>
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuHamburger from './MenuHamburger';

const Rules = () => {
  const navigate = useNavigate();

  const manualRules = [
    { id: 1, type: 'Debit', description: 'Terminal purchase adjustments' },
    { id: 2, type: 'Debit', description: 'Chargeback fees' },
    { id: 3, type: 'Credit', description: 'Courtesy adjustments' },
  ];

  const automaticRules = [
    { id: 1, name: 'Insufficient Funds', type: 'Debit', trigger: 'Account balance < $0' },
    { id: 2, name: 'High Volume Transactions', type: 'Credit', trigger: 'More than 10 credits in 1 hour' },
  ];

  return (
    <div style={{ backgroundColor: '#F7F9FC', height: '100vh', padding: '20px' }}>
      <MenuHamburger />
      <header style={{ marginLeft: '60px', backgroundColor: '#375A7F', color: 'white', padding: '20px', borderRadius: '8px' }}>
        <h1>Rules</h1>
      </header>
      <div style={{ marginTop: '20px', marginLeft: '60px' }}>
        <h2>Manual Rules</h2>
        <ul>
          {manualRules.map((rule) => (
            <li key={rule.id}>
              <strong>{rule.type}:</strong> {rule.description}
            </li>
          ))}
        </ul>
        <h2>Automatic Rules</h2>
        <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#375A7F', color: 'white' }}>
              <th>Name</th>
              <th>Type</th>
              <th>Trigger</th>
            </tr>
          </thead>
          <tbody>
            {automaticRules.map((rule) => (
              <tr key={rule.id} style={{ backgroundColor: 'white', borderBottom: '1px solid #ddd' }}>
                <td>{rule.name}</td>
                <td>{rule.type}</td>
                <td>{rule.trigger}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => navigate('/create-rule')}
          style={{
            backgroundColor: '#4A90E2',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Create Rule
        </button>
      </div>
    </div>
  );
};

export default Rules;

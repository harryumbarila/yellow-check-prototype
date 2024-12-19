import React, { useState } from 'react';

const CreateRule = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Debit');
  const [trigger, setTrigger] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rule Created: ${name}, Type: ${type}, Trigger: ${trigger}`);
  };

  return (
    <div style={{ backgroundColor: '#F7F9FC', height: '100vh', padding: '20px' }}>
      <header style={{ backgroundColor: '#375A7F', padding: '20px', color: 'white', borderRadius: '8px' }}>
        <h1>Create Rule</h1>
      </header>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <label>
          Rule Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
            required
          />
        </label>
        <label>
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          >
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
        </label>
        <label>
          Trigger:
          <input
            type="text"
            value={trigger}
            onChange={(e) => setTrigger(e.target.value)}
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
            required
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Create Rule
        </button>
      </form>
    </div>
  );
};

export default CreateRule;

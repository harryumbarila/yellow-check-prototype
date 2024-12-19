import React, { useState } from 'react';
import MenuHamburger from './MenuHamburger';

const Adjustments = () => {
  const [type, setType] = useState('Debit');
  const [merchantId, setMerchantId] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Adjustment Created: ${type} of $${amount}`);
  };

  return (
    <div style={{ backgroundColor: '#F7F9FC', height: '100vh', padding: '20px' }}>
      <MenuHamburger />
      <header style={{ backgroundColor: '#375A7F', color: 'white', padding: '20px', borderRadius: '8px' }}>
        <h1>Adjustments</h1>
      </header>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <label>
          Transaction Type:
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ display: 'block', margin: '10px 0' }}>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
        </label>
        <label>
          Merchant ID:
          <input type="text" value={merchantId} onChange={(e) => setMerchantId(e.target.value)} style={{ display: 'block', margin: '10px 0' }} required />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ display: 'block', margin: '10px 0' }} required />
        </label>
        <label>
          Adjustment Reason:
          <select value={reason} onChange={(e) => setReason(e.target.value)} style={{ display: 'block', margin: '10px 0' }}>
            <option value="Terminal purchase">Terminal Purchase</option>
            <option value="Chargeback fee">Chargeback Fee</option>
            <option value="Other">Other</option>
          </select>
        </label>
        {reason === 'Other' && (
          <label>
            Custom Reason:
            <input type="text" value={customReason} onChange={(e) => setCustomReason(e.target.value)} style={{ display: 'block', margin: '10px 0' }} />
          </label>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Create Adjustment
        </button>
      </form>
    </div>
  );
};

export default Adjustments;

import React, { useState } from 'react';
import MenuHamburger from './MenuHamburger';
import Breadcrumbs from './Breadcrumbs';

const Adjustments = () => {
  const [merchantId, setMerchantId] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [adjustmentReason, setAdjustmentReason] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar Merchant ID
    if (merchantId === '101010') {
      setError('Error: Merchant ID not registered.');
      return;
    }

    setError('');

    // Mock data para la confirmación
    const bankNumber = '1234-5678-9012';
    const processDate = new Date().toISOString().split('T')[0];
    const companyName = 'Mock Company Inc.';

    alert(`
      Adjustment Submitted Successfully!
      - Merchant ID: ${merchantId}
      - Transaction Type: ${transactionType}
      - Adjustment Reason: ${adjustmentReason}
      - Amount: $${amount}
      - Bank Number: ${bankNumber}
      - Process Date: ${processDate}
      - Company Name: ${companyName}
    `);
  };

  return (
    <div style={{ marginLeft: '60px', padding: '20px', backgroundColor: '#F7F9FC', minHeight: '100vh' }}>
      <MenuHamburger />
      <Breadcrumbs />

      <header style={{ backgroundColor: '#375A7F', padding: '20px', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h1>Adjustments</h1>
      </header>

      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Create Adjustments</h2>
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px' }} onSubmit={handleSubmit}>
          {/* Merchant ID */}
          <div>
            <label htmlFor="merchantId" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Merchant ID
            </label>
            <input
              type="text"
              id="merchantId"
              placeholder="Enter Merchant ID"
              value={merchantId}
              onChange={(e) => setMerchantId(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              required
            />
          </div>

          {/* Transaction Type */}
          <div>
            <label htmlFor="transactionType" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Transaction Type
            </label>
            <select
              id="transactionType"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              required
            >
              <option value="">Select type</option>
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </select>
          </div>

          {/* Adjustment Reason */}
          <div>
            <label htmlFor="adjustmentReason" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Adjustment Reason
            </label>
            <select
              id="adjustmentReason"
              value={adjustmentReason}
              onChange={(e) => setAdjustmentReason(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              required
            >
              <option value="">Select a reason</option>
              <option value="terminal_purchase">Terminal Purchase</option>
              <option value="chargeback_fee">Chargeback Fee</option>
              <option value="risk_adjustment">Risk Adjustment</option>
              <option value="courtesy_adjustment">Courtesy Adjustment</option>
              <option value="billing_correction">Billing Correction</option>
              <option value="fee_reimbursement">Fee Reimbursement</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#375A7F',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Submit Adjustment
          </button>
        </form>
      </section>
    </div>
  );
};

export default Adjustments;

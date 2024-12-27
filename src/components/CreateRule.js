import React from 'react';
import MenuHamburger from './MenuHamburger';
import Breadcrumbs from './Breadcrumbs';

const CreateRule = () => {
  return (
    <div style={{ marginLeft: '60px', padding: '20px', backgroundColor: '#F7F9FC', minHeight: '100vh' }}>
      <MenuHamburger />
      <Breadcrumbs />

      <header style={{ backgroundColor: '#375A7F', padding: '20px', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h1>Create Rule <span style={{ color: '#FFD700', fontSize: '18px' }}>(Pro)</span></h1>
      </header>

      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Create a New Rule</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px' }}>
          <div>
            <label htmlFor="ruleName" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Rule Name
            </label>
            <input
              type="text"
              id="ruleName"
              placeholder="Enter rule name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>

          <div>
            <label htmlFor="ruleType" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Rule Type
            </label>
            <select
              id="ruleType"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            >
              <option value="">Select type</option>
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </select>
          </div>

          <div>
            <label htmlFor="trigger" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Trigger
            </label>
            <textarea
              id="trigger"
              placeholder="Describe how the rule will be triggered"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'vertical',
              }}
            ></textarea>
          </div>

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
            Create Rule
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateRule;

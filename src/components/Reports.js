import React, { useState } from 'react';
import MenuHamburger from './MenuHamburger';

const Reports = () => {
  const [filters, setFilters] = useState({ dateFrom: '', dateTo: '', type: '', mid: '' });

  const reports = [
    { id: 1, date: '2023-12-01', type: 'Debit', mid: 'MID123', amount: 150.0 },
    { id: 2, date: '2023-12-02', type: 'Credit', mid: 'MID456', amount: -200.0 },
    { id: 3, date: '2023-12-03', type: 'Debit', mid: 'MID789', amount: 300.0 },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesDate =
      (!filters.dateFrom || report.date >= filters.dateFrom) &&
      (!filters.dateTo || report.date <= filters.dateTo);
    const matchesType = !filters.type || report.type === filters.type;
    const matchesMid = !filters.mid || report.mid.includes(filters.mid);
    return matchesDate && matchesType && matchesMid;
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: '#F7F9FC', height: '100vh', padding: '20px' }}>
      <MenuHamburger />
      <header style={{ marginLeft: '60px', backgroundColor: '#375A7F', color: 'white', padding: '20px', borderRadius: '8px' }}>
        <h1>Reports</h1>
      </header>
      <div style={{ marginTop: '20px', marginLeft: '60px' }}>
        <h2>Filters</h2>
        <div>
          <label>
            Date From:
            <input type="date" name="dateFrom" value={filters.dateFrom} onChange={handleFilterChange} />
          </label>
          <label>
            Date To:
            <input type="date" name="dateTo" value={filters.dateTo} onChange={handleFilterChange} />
          </label>
          <label>
            Type:
            <select name="type" value={filters.type} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
            </select>
          </label>
          <label>
            MID:
            <input type="text" name="mid" value={filters.mid} onChange={handleFilterChange} />
          </label>
        </div>
        <h2>Report List</h2>
        <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#375A7F', color: 'white' }}>
              <th>Date</th>
              <th>Type</th>
              <th>MID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id} style={{ backgroundColor: 'white', borderBottom: '1px solid #ddd' }}>
                <td>{report.date}</td>
                <td>{report.type}</td>
                <td>{report.mid}</td>
                <td>${report.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;

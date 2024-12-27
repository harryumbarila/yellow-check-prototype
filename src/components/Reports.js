import React, { useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie, Scatter } from 'react-chartjs-2';
import MenuHamburger from './MenuHamburger';
import Breadcrumbs from './Breadcrumbs';

// Registrar componentes necesarios de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend);

const Reports = () => {
  const transactions = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    merchant: `Merchant ${index + 1}`,
    date: `2023-12-${(index % 30) + 1}`,
    amount: (Math.random() * 1000).toFixed(2),
    type: index % 2 === 0 ? 'Debit' : 'Credit',
    status: index % 3 === 0 ? 'Pending' : index % 3 === 1 ? 'Executed' : 'Cancelled',
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterMerchantId, setFilterMerchantId] = useState('');
  const itemsPerPage = 10;

  // Filtrar transacciones
  const filteredTransactions = transactions.filter((tx) => {
    const matchesStatus = filterStatus ? tx.status === filterStatus : true;
    const matchesDate = filterDate ? tx.date === filterDate : true;
    const matchesMerchantId = filterMerchantId ? tx.merchant.includes(filterMerchantId) : true;
    return matchesStatus && matchesDate && matchesMerchantId;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Datos para los gráficos
  const barData = {
    labels: ['Debit', 'Credit'],
    datasets: [
      {
        label: 'Transaction Amounts',
        data: [
          transactions.filter((t) => t.type === 'Debit').reduce((sum, t) => sum + parseFloat(t.amount), 0),
          transactions.filter((t) => t.type === 'Credit').reduce((sum, t) => sum + parseFloat(t.amount), 0),
        ],
        backgroundColor: ['#375A7F', '#52CEE6'],
      },
    ],
  };

  const pieData = {
    labels: ['Pending', 'Executed', 'Cancelled'],
    datasets: [
      {
        data: [
          transactions.filter((t) => t.status === 'Pending').length,
          transactions.filter((t) => t.status === 'Executed').length,
          transactions.filter((t) => t.status === 'Cancelled').length,
        ],
        backgroundColor: ['#52CEE6', '#375A7F', '#FF6B6B'],
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: 'Transaction Amounts',
        data: transactions.map((t) => ({ x: t.id, y: parseFloat(t.amount) })),
        backgroundColor: '#375A7F',
      },
    ],
  };

  const changePage = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ marginLeft: '60px', padding: '20px', backgroundColor: '#F7F9FC', minHeight: '100vh' }}>
      <MenuHamburger />
      <Breadcrumbs />

      <header style={{ backgroundColor: '#375A7F', padding: '20px', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h1>Reports</h1>
      </header>

      {/* Filtros */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="statusFilter" style={{ fontWeight: 'bold', marginRight: '10px' }}>Filter by Status:</label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Executed">Executed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateFilter" style={{ fontWeight: 'bold', marginRight: '10px' }}>Filter by Date:</label>
          <input
            type="text"
            id="dateFilter"
            placeholder="YYYY-MM-DD"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label htmlFor="merchantFilter" style={{ fontWeight: 'bold', marginRight: '10px' }}>Filter by Merchant ID:</label>
          <input
            type="text"
            id="merchantFilter"
            placeholder="Merchant Name"
            value={filterMerchantId}
            onChange={(e) => setFilterMerchantId(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
      </div>

      {/* Gráficas */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{ width: '30%' }}>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div style={{ width: '30%' }}>
          <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div style={{ width: '30%' }}>
          <Scatter data={scatterData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>

      {/* Tabla de Transacciones */}
      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Transaction List</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', marginTop: '20px' }}>
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
            {currentTransactions.map((tx) => (
              <tr key={tx.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td>{tx.id}</td>
                <td>{tx.merchant}</td>
                <td>{tx.date}</td>
                <td>${tx.amount}</td>
                <td>{tx.type}</td>
                <td>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={() => changePage('prev')}
            disabled={currentPage === 1}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: '#375A7F',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Previous
          </button>
          <span style={{ fontWeight: 'bold', margin: '0 10px' }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => changePage('next')}
            disabled={currentPage === totalPages}
            style={{
              padding: '10px 20px',
              backgroundColor: '#375A7F',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reports;

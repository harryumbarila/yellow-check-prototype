import React from 'react';
import MenuHamburger from './MenuHamburger';
import Breadcrumbs from './Breadcrumbs';
import * as XLSX from 'xlsx';

const GeneratedFiles = () => {
  const files = [
    { date: '2023-12-01', name: 'ACH_2023-12-01.xlsx' },
    { date: '2023-12-02', name: 'ACH_2023-12-02.xlsx' },
    { date: '2023-12-03', name: 'ACH_2023-12-03.xlsx' },
  ];

  const handleDownload = (fileName) => {
    // Crear un libro de trabajo vacío
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([['Placeholder Data']]); // Ejemplo de datos básicos
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generar el archivo y descargarlo
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div style={{ marginLeft: '60px', padding: '20px', backgroundColor: '#F7F9FC', minHeight: '100vh' }}>
      <MenuHamburger />
      <Breadcrumbs />

      <header style={{ backgroundColor: '#375A7F', padding: '20px', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h1>Generated Files</h1>
      </header>

      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>List of Generated Files</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {files.map((file, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {file.date} -{' '}
              <button
                onClick={() => handleDownload(file.name)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#375A7F',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                {file.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GeneratedFiles;

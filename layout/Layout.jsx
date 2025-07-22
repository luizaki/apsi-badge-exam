import React from 'react';

function Layout({ children }) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>📦 My Reusable Component App</h1>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
        &copy; 2025 MyApp Inc.
      </footer>
    </div>
  );
}

export default Layout;

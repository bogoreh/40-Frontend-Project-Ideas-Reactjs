import React from 'react';
// Remove this line: import "../styles/globals.css";

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'white',
      padding: '1rem 2rem',
      boxShadow: 'var(--shadow)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--gray-200)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1 style={{ 
          color: 'var(--primary)', 
          fontSize: '1.5rem', 
          fontWeight: '700' 
        }}>
          HealthCare Pro
        </h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--gray-100)',
          borderRadius: '0.5rem',
          color: 'var(--gray-600)'
        }}>
          Dr. Wilson
        </div>
      </div>
    </header>
  );
};

export default Header;
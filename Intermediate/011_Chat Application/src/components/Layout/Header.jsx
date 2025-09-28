import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header style={{ 
      padding: '1rem', 
      backgroundColor: '#f8f9fa', 
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0, color: '#333' }}>Chat App</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>Welcome, {currentUser?.name}</span>
        <button 
          onClick={logout}
          className="btn-secondary"
          style={{ padding: '0.5rem 1rem' }}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'patients', label: 'Patients', icon: '👤' },
    { id: 'appointments', label: 'Appointments', icon: '📅' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside style={{
      width: '250px',
      backgroundColor: 'white',
      padding: '1.5rem 0',
      boxShadow: 'var(--shadow)',
      height: 'calc(100vh - 80px)',
      position: 'sticky',
      top: '0'
    }}>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          {menuItems.map(item => (
            <li key={item.id} style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={() => setActivePage(item.id)}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  border: 'none',
                  backgroundColor: activePage === item.id ? 'var(--primary)' : 'transparent',
                  color: activePage === item.id ? 'white' : 'var(--gray-600)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
                onMouseOver={(e) => {
                  if (activePage !== item.id) {
                    e.target.style.backgroundColor = 'var(--gray-100)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activePage !== item.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div style={{ padding: '1.5rem', borderTop: '1px solid var(--gray-200)', marginTop: '2rem' }}>
        <button style={{
          width: '100%',
          padding: '1rem',
          border: 'none',
          backgroundColor: 'transparent',
          color: 'var(--danger)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: 'pointer',
          fontWeight: '600',
          borderRadius: '0.5rem',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--gray-100)'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <span>🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="card" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1rem',
      transition: 'transform 0.3s ease'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        padding: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: color + '20',
        color: color,
        fontSize: '1.5rem',
        minWidth: '60px',
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {Icon ? <Icon /> : '📊'} {/* Fallback emoji */}
      </div>
      <div>
        <h3 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: 'var(--gray-800)',
          marginBottom: '0.25rem'
        }}>
          {value}
        </h3>
        <p style={{ 
          color: 'var(--gray-600)', 
          fontWeight: '500' 
        }}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
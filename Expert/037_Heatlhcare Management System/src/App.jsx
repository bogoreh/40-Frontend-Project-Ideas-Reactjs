import React, { useState } from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import SettingsPage from './pages/SettingsPage';
import './styles/globals.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'patients':
        return <PatientsPage />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main style={{ 
          flex: 1, 
          padding: '2rem',
          minHeight: 'calc(100vh - 80px)'
        }}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Layout/Header';
import ContactList from './components/Chat/ContactList';
import ChatWindow from './components/Chat/ChatWindow';

const ChatApp = () => {
  const { currentUser } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (!currentUser) {
    return (
      <div className="auth-container">
        {isLogin ? (
          <Login switchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup switchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="chat-layout">
        <ContactList />
        <ChatWindow />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <ChatApp />
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
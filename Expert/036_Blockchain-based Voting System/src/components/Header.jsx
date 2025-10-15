import React from 'react';

const Header = ({ account, connectWallet }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🗳️ BlockchainVote</h1>
        </div>
        <div className="wallet-section">
          {account ? (
            <div className="wallet-connected">
              <span className="wallet-address">
                {account.slice(0, 6)}...{account.slice(-4)}
              </span>
              <div className="connected-dot"></div>
            </div>
          ) : (
            <button className="connect-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { useBlockchain } from './hooks/useBlockchain';
import Header from './components/Header';
import ElectionCard from './components/ElectionCard';
import './styles/App.css';

function App() {
  const { account, contract, loading, setLoading, connectWallet, isConnected } = useBlockchain();
  const [elections, setElections] = useState([]);

  // Mock data for demonstration
  const mockElections = [
    {
      id: 1,
      name: "Student Council Election",
      description: "Vote for your student council representatives",
      active: true,
      candidateCount: 3
    },
    {
      id: 2,
      name: "Community Proposal",
      description: "Decide on the new community center design",
      active: true,
      candidateCount: 2
    },
    {
      id: 3,
      name: "Previous Election Results",
      description: "View results from last month's election",
      active: false,
      candidateCount: 4
    }
  ];

  useEffect(() => {
    // For demo purposes, use mock data
    // In production, you would load from the blockchain
    setElections(mockElections);
  }, [contract]);

  const loadElections = async () => {
    if (!contract) return;
    
    try {
      setLoading(true);
      const electionCount = await contract.methods.electionCount().call();
      const electionList = [];

      for (let i = 1; i <= electionCount; i++) {
        const election = await contract.methods.elections(i).call();
        electionList.push({
          id: i,
          name: election.name,
          description: election.description,
          active: election.active,
          candidateCount: parseInt(election.candidateCount)
        });
      }

      setElections(electionList);
    } catch (error) {
      console.error('Error loading elections:', error);
      // Fallback to mock data if blockchain not available
      setElections(mockElections);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (electionId, candidateId) => {
    if (!contract || !account) {
      alert('Please connect your wallet first!');
      return;
    }

    try {
      setLoading(true);
      // For demo purposes, simulate voting
      // In production, you would call the actual contract method
      console.log(`Voting for election ${electionId}, candidate ${candidateId}`);
      
      // Simulate blockchain transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Vote cast successfully! 🗳️');
      
      // Reload elections to show updated results
      loadElections();
    } catch (error) {
      console.error('Error voting:', error);
      alert('Error casting vote. You may have already voted or there was a network issue.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header account={account} connectWallet={connectWallet} />
      
      <main className="main">
        <div className="container">
          <div className="hero-section">
            <h2>Secure Blockchain Voting</h2>
            <p>Transparent, tamper-proof elections powered by blockchain technology</p>
            {!isConnected && (
              <div className="wallet-prompt">
                <p>Connect your wallet to start voting</p>
              </div>
            )}
          </div>

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Processing blockchain transaction...</p>
            </div>
          )}

          <div className="elections-grid">
            {elections.map(election => (
              <ElectionCard
                key={election.id}
                election={election}
                contract={contract}
                account={account}
                onVote={handleVote}
              />
            ))}
            
            {elections.length === 0 && !loading && (
              <div className="no-elections">
                <h3>No elections available</h3>
                <p>Check back later for upcoming elections.</p>
              </div>
            )}
          </div>

          {/* Demo Info */}
          <div className="demo-info">
            <h3>🚀 Demo Information</h3>
            <p>This is a demonstration of a blockchain voting system. For full functionality:</p>
            <ul>
              <li>Install MetaMask browser extension</li>
              <li>Connect to a supported network (Ethereum, Polygon, etc.)</li>
              <li>Deploy the smart contract to a blockchain network</li>
              <li>Update the contract address in the configuration</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
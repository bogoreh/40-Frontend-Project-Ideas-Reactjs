import React, { useState } from 'react';

const ElectionCard = ({ election, contract, account, onVote }) => {
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [candidates, setCandidates] = useState([]);

  // Mock candidates data
  const mockCandidates = {
    1: [
      { id: 1, name: "Alice Johnson", votes: 45 },
      { id: 2, name: "Bob Smith", votes: 32 },
      { id: 3, name: "Carol Davis", votes: 28 }
    ],
    2: [
      { id: 1, name: "Modern Design", votes: 67 },
      { id: 2, name: "Traditional Design", votes: 43 }
    ],
    3: [
      { id: 1, name: "Option A", votes: 120 },
      { id: 2, name: "Option B", votes: 85 },
      { id: 3, name: "Option C", votes: 92 },
      { id: 4, name: "Option D", votes: 78 }
    ]
  };

  const loadCandidates = async () => {
    if (contract) {
      try {
        // Try to load from blockchain first
        const [names, votes] = await contract.methods
          .getElectionResults(election.id)
          .call();
        
        const candidateList = names.map((name, index) => ({
          id: index + 1,
          name: name,
          votes: parseInt(votes[index])
        }));
        
        setCandidates(candidateList);
      } catch (error) {
        console.error('Error loading candidates from blockchain:', error);
        // Fallback to mock data
        setCandidates(mockCandidates[election.id] || []);
      }
    } else {
      // Use mock data if no contract
      setCandidates(mockCandidates[election.id] || []);
    }
    setShowVoteModal(true);
  };

  return (
    <>
      <div className="election-card">
        <div className="election-info">
          <h3>{election.name}</h3>
          <p>{election.description}</p>
          <div className="election-stats">
            <span className="stat">{election.candidateCount} candidates</span>
            <span className={`status ${election.active ? 'active' : 'ended'}`}>
              {election.active ? 'Active' : 'Ended'}
            </span>
          </div>
        </div>
        <div className="election-actions">
          {election.active ? (
            <button 
              className="vote-btn"
              onClick={loadCandidates}
              disabled={!account}
            >
              {account ? 'Vote Now' : 'Connect Wallet to Vote'}
            </button>
          ) : (
            <button 
              className="results-btn"
              onClick={loadCandidates}
            >
              View Results
            </button>
          )}
        </div>
      </div>

      {showVoteModal && (
        <div className="modal-overlay" onClick={() => setShowVoteModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{election.name}</h3>
              <button 
                className="close-btn"
                onClick={() => setShowVoteModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <h4>{election.active ? 'Select your candidate:' : 'Election Results:'}</h4>
              <div className="candidates-list">
                {candidates.map(candidate => (
                  <div key={candidate.id} className="candidate-item">
                    <div className="candidate-info">
                      <span className="candidate-name">{candidate.name}</span>
                      {!election.active && (
                        <span className="vote-count">{candidate.votes} votes</span>
                      )}
                    </div>
                    {election.active && (
                      <button 
                        className="select-btn"
                        onClick={() => {
                          onVote(election.id, candidate.id);
                          setShowVoteModal(false);
                        }}
                      >
                        Vote
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {candidates.length === 0 && (
                <p className="no-candidates">No candidates available for this election.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ElectionCard;
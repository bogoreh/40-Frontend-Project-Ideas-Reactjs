// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    
    struct Election {
        uint id;
        string name;
        string description;
        bool active;
        uint candidateCount;
        mapping(uint => Candidate) candidates;
        mapping(address => bool) voters;
    }
    
    address public owner;
    uint public electionCount;
    mapping(uint => Election) public elections;
    
    event ElectionCreated(uint electionId, string name);
    event Voted(uint electionId, uint candidateId, address voter);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function createElection(string memory _name, string memory _description) public onlyOwner {
        electionCount++;
        Election storage e = elections[electionCount];
        e.id = electionCount;
        e.name = _name;
        e.description = _description;
        e.active = true;
        e.candidateCount = 0;
        
        emit ElectionCreated(electionCount, _name);
    }
    
    function addCandidate(uint _electionId, string memory _name) public onlyOwner {
        Election storage e = elections[_electionId];
        require(e.active, "Election is not active");
        
        e.candidateCount++;
        e.candidates[e.candidateCount] = Candidate(e.candidateCount, _name, 0);
    }
    
    function vote(uint _electionId, uint _candidateId) public {
        Election storage e = elections[_electionId];
        require(e.active, "Election is not active");
        require(!e.voters[msg.sender], "You have already voted in this election");
        require(_candidateId > 0 && _candidateId <= e.candidateCount, "Invalid candidate");
        
        e.voters[msg.sender] = true;
        e.candidates[_candidateId].voteCount++;
        
        emit Voted(_electionId, _candidateId, msg.sender);
    }
    
    function getElectionResults(uint _electionId) public view returns (string[] memory, uint[] memory) {
        Election storage e = elections[_electionId];
        string[] memory names = new string[](e.candidateCount);
        uint[] memory votes = new uint[](e.candidateCount);
        
        for (uint i = 1; i <= e.candidateCount; i++) {
            names[i-1] = e.candidates[i].name;
            votes[i-1] = e.candidates[i].voteCount;
        }
        
        return (names, votes);
    }
    
    function endElection(uint _electionId) public onlyOwner {
        elections[_electionId].active = false;
    }
}
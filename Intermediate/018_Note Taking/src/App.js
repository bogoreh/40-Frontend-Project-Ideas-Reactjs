// App.js
import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content,
      date: new Date().toLocaleDateString()
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Note Taking Tool</h1>
        <p>Keep your thoughts organized</p>
      </header>
      
      <div className="app-container">
        <div className="sidebar">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <NoteList 
            notes={filteredNotes} 
            onEditNote={setEditingNote}
            onDeleteNote={deleteNote}
            activeNote={editingNote}
          />
        </div>
        
        <div className="main-content">
          <NoteForm 
            onAddNote={addNote}
            onUpdateNote={updateNote}
            editingNote={editingNote}
            setEditingNote={setEditingNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
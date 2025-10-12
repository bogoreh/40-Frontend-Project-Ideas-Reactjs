// components/NoteList.js
import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onEditNote, onDeleteNote, activeNote }) => {
  return (
    <div className="note-list">
      <h2>Your Notes ({notes.length})</h2>
      {notes.length === 0 ? (
        <p className="empty-state">No notes yet. Create your first note!</p>
      ) : (
        notes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onEdit={onEditNote}
            onDelete={onDeleteNote}
            isActive={activeNote && activeNote.id === note.id}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
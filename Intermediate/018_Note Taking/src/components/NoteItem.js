// components/NoteItem.js
import React from 'react';

const NoteItem = ({ note, onEdit, onDelete, isActive }) => {
  const truncatedContent = note.content.length > 100 
    ? note.content.substring(0, 100) + '...' 
    : note.content;

  return (
    <div className={`note-item ${isActive ? 'active' : ''}`}>
      <div className="note-item-content" onClick={() => onEdit(note)}>
        <h3>{note.title}</h3>
        <p>{truncatedContent}</p>
        <span className="note-date">{note.date}</span>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(note.id)}
        aria-label="Delete note"
      >
        ×
      </button>
    </div>
  );
};

export default NoteItem;
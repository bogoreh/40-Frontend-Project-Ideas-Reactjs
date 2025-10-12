// components/NoteForm.js
import React, { useState, useEffect } from 'react';

const NoteForm = ({ onAddNote, onUpdateNote, editingNote, setEditingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) return;
    
    if (editingNote) {
      onUpdateNote({
        ...editingNote,
        title,
        content,
        date: new Date().toLocaleDateString()
      });
    } else {
      onAddNote({ title, content });
    }
    
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    setEditingNote(null);
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-form">
      <h2>{editingNote ? 'Edit Note' : 'Create New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            className="content-input"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-btn">
            {editingNote ? 'Update' : 'Save'}
          </button>
          {editingNote && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
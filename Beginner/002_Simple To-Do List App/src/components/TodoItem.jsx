import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span
          className={`ml-3 text-lg ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
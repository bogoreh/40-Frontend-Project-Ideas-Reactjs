import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="container">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseSummary expenses={expenses} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
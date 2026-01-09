// Expense Tracker

import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 2, description: "Tomato", amount: 5, category: "Groceries" },
    { id: 3, description: "Pasta", amount: 15, category: "Groceries" },
    { id: 4, description: "Cream", amount: 10, category: "Groceries" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

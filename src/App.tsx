import React from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "entertainment" },
    { id: 2, description: "bbb", amount: 34, category: "utilities" },
    { id: 3, description: "ccc", amount: 22, category: "grocery" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;

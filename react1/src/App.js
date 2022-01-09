import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    price: "95.61",
    date: new Date(2021, 11, 16),
  },
  {
    id: 2,
    title: "Mobile Phone",
    price: "1200",
    date: new Date(2021, 5, 7),
  },
  {
    id: 3,
    title: "Laptop",
    price: "4999.90",
    date: new Date(2021, 3, 5),
  },
  {
    id: 4,
    title: "Table",
    price: "123.54",
    date: new Date(2021, 1, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

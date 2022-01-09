import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsClicked(false);
  };
  const startEditingHandler = () => {
    setIsClicked(true);
  };
  const stopEditingHandler = () => {
    setIsClicked(false);
  };
  return (
    <div className="new-expense">
      {!isClicked && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isClicked && (
        <ExpenseForm onSavedExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;

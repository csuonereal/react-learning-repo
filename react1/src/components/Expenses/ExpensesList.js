import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );
  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;

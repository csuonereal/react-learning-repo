import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }
    setIsEnteredNameValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  const isInvalid = !isEnteredNameValid && enteredNameTouched;
  const inputStyle = isInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {isInvalid && <p className="error-text">Name can't be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

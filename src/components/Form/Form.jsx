import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import InvalidInput from "../InvalidInput/InvalidInput";

const Form = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addData = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Username",
        message: "Please enter a valid username and age (non-empty values)",
      });
      return;
    }
    if (enteredUsername.trim().length < 3) {
      setError({
        title: "Invalid Username",
        message: "Please enter a valid username (>3Characters)",
      });
      return;
    }
    if (+enteredAge < 8) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>8)",
      });
      return;
    }

    setEnteredAge("");
    setEnteredUsername("");

    const userInput = [{ name: enteredUsername, age: enteredAge }];
    props.onAddUser(userInput);
  };

  const onErrorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <InvalidInput
          errorHandler={onErrorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.form}>
        <form onSubmit={addData} className="form">
          <p>
            <label htmlFor="username">Username</label>
            <input
              value={enteredUsername}
              id="username"
              onChange={usernameChangeHandler}
              type="text"
              className="user-Input"
            />
          </p>
          <p>
            <label htmlFor="age">Age</label>
            <input
              value={enteredAge}
              id="age"
              onChange={ageChangeHandler}
              type="number"
              className="user-age"
            />
          </p>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;

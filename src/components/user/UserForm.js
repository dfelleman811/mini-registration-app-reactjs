import { useState } from "react";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const user = {id: Math.random(), name: enteredName, age: enteredAge}
    props.onNewUser(user);
  };

  return (
    <>
      <form onSubmit={addUserHandler}>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameInputChangeHandler}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              min="1"
              max="100"
              step="1"
              value={enteredAge}
              onChange={ageInputChangeHandler}
            />
          </div>
          <div>
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;

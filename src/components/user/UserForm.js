import { useState } from "react";
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
        setIsValid(true);
    }
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    if (event.target.value <= 0) {
        setIsValid(false);
        return;
    }
    setIsValid(true);
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
        setIsValid(false);
        return;
    }
    const user = {id: Math.random(), name: enteredName, age: enteredAge}
    props.onNewUser(user);
    setEnteredName('');
    setEnteredAge('');
    setIsValid(true);
  };

  return (
    <>
      <form onSubmit={addUserHandler}>
        <div className={styles['new-user__controls']}>
          <div className={`${styles['new-user__control']} ${!isValid ? styles.invalid : '' }`}>
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameInputChangeHandler}
            />
          </div>
          <div  className={`${styles['new-user__control']} ${!isValid ? styles.invalid : '' }`}>
            <label>Age</label>
            <input
              type="number"
              min="1"
              max="100"
              step="1"
              value={enteredAge}
              onChange={ageInputChangeHandler}
            />
          </div >
          <div className={styles['new-user__actions']}>
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;

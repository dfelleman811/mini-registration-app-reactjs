import { useState } from 'react';
import NewUser from "./components/user/NewUser";
import "./App.css";
import UsersList from './components/user/UsersList';


const MOCK_USERS = [
  {id: 1, name: 'bethany', age: 35 },
  {id: 2, name: 'christof', age: 45 },
  {id: 3, name: 'janine', age: 29 },
];



function App() {

  const [users, setUsers] = useState(MOCK_USERS);

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [...prevUsers, user]
    })
  };


  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;

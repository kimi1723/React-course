import {useState} from 'react';
import React from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';


function App() {
  const [usersArray, setUsersArray] = useState([]);
  // let usersArray = [];

  const handleData = users => {
    console.log(users)
    // usersArray = users.map(user => user);
    setUsersArray([...users]);
  }

  return (
   <div>
     <AddUser sendData={handleData}/>
     <UserList users={usersArray}/>
   </div>
  );
}

export default App;

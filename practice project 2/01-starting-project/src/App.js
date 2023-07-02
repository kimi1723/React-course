import {useState} from 'react';
import React from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import ErrorModal from './components/ErrorModal';

function App() {
  const [usersArray, setUsersArray] = useState([]);
  const [errorCode, setErrorCode] = useState(200);
  // let usersArray = [];
  let isArrayEmpty = true, isError;

  const handleData = users => {
    
    // usersArray = users.map(user => user);
    setUsersArray([...users]);
  }

  const errorHandler = errorCode => {
    setErrorCode(errorCode);
  }

  const closeModalHandler = () => {
    setErrorCode(200);
  }

  if (usersArray.length !== 0) isArrayEmpty = false;
  errorCode === 200 ? isError = false : isError = true;

  return (
   <div>
     <AddUser sendData={handleData} handleError={errorHandler}/>
     {!isArrayEmpty && <UserList users={usersArray}/>}
     {isError && <ErrorModal errorCode={errorCode} closeErrorModal={closeModalHandler}/>}
   </div>
  );
}

export default App;

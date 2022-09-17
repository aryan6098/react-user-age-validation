import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUSerList] = useState([]);
  const onAddUserHanlder = (uName, uAge) => {
    setUSerList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHanlder} />
      {usersList.length && <UsersList users={usersList} />}
    </div>
  );
}

export default App;

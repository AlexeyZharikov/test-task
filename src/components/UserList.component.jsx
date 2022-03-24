import React, { useState } from "react";
import UserCard from "./UserCard.component";

const UserList = () => {

  const usersArr = JSON.parse(localStorage.getItem('users'));   

  const [users, setUsers] = useState(usersArr);

  return (
    <div className="main_page">
      {users.map(user => 
          <UserCard setUsers={setUsers} user={user} key={user.id}/>
        )}
    </div>
  )
}

export default UserList;
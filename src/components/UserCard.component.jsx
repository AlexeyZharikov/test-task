import React from "react";
import Btn from "./Btn.component";
import { CardHeader, Card, CardContent, Typography } from "@mui/material";


const UserCard = (props) => {
  
  const usersArr = JSON.parse(localStorage.getItem('users'));

  const DeleteUser = (user) => {
        const newUserArr = usersArr.filter(u => u.id !== user.id)
        localStorage.setItem('users', JSON.stringify(newUserArr));
        props.setUsers(newUserArr);
      };


  return (
    <div className="card">
      <Card sx={{ width: 345 }}>
        <CardHeader
          title={props.user.login}
          ml={1}
        />
        <CardContent style={{ textAlign: "left" }}>
          <Typography variant="body2" sx={{ fontSize: 15 }} color="text.secondary" component="div">
            User id: {props.user.id}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 15 }} color="#000" gutterBottom>
            login: {props.user.login}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            password: {props.user.password}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            user age: {props.user.age} 
          </Typography>
          <div className="buttons">
            <Btn onClick={() => DeleteUser(props.user)}>Delete</Btn>
          </div>
        </CardContent>
      </Card>
      </div>
  );
};

export default UserCard;

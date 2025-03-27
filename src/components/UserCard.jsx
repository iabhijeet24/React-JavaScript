import React from 'react';
import './UserCardStyle.css'

const UserCard = ({ name , age}) => {
  return (
    <div className="UserContainer">
      <h3 id='userName'>{name}</h3>
      <p id='userAge'>I am {age} years old.</p>
      <p id='userDescription'>I am learning React JS.</p>
    </div>
  );
};

export default UserCard; // 

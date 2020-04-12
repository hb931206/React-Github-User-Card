import React from "react";

const UserCard = (props) => {
  console.log("UserCar props", props);
  return (
    <div>
      <h1>{props.name || props.login}</h1>
      <img src={props.image} />
      <p>Location: {props.location}</p>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
    </div>
  );
};

export default UserCard;

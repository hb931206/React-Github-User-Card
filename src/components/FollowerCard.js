import React from "react";

const FollowerCard = (props) => {
  console.log("FollowerCard props", props);
  return (
    <div>
      <h1>{props.name || props.login}</h1>
      <img src={props.image} />
    </div>
  );
};

export default FollowerCard;

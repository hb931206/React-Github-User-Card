import React from "react";

const FollowerCard = (props) => {
  console.log("FollowerCard props", props);
  return (
    <div className="follower-card">
      <h2>{props.name || props.login}</h2>
      <img src={props.image} />
    </div>
  );
};

export default FollowerCard;

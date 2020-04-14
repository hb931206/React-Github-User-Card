import React from "react";
import FollowerCard from "./FollowerCard";
const FollowerList = (props) => {
  console.log("FollowerList", props.followers);
  return (
    <div className="follower-list">
      <h1>Followers</h1>
      {props.followers.map((follower) => (
        <FollowerCard
          name={follower.name}
          login={follower.login}
          image={follower.avatar_url}
        />
      ))}
    </div>
  );
};

export default FollowerList;

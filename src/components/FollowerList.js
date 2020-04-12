import React from "react";
import UserCard from "./UserCard";
const FollowerList = (props) => {
  console.log("FollowerList", props.followers);
  return (
    <div classname="followerlist">
      {props.followers.map((follower) => (
        <UserCard
          name={follower.name}
          login={follower.login}
          image={follower.avatar_url}
          location={follower.location || "Unknown"}
          followers={follower.followers || "Unknown"}
          following={follower.following || "Unknown"}
        />
      ))}
    </div>
  );
};

export default FollowerList;

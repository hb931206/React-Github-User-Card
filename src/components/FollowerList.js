import React from "react";
import UserCard from "./UserCard";
const FollowerList = (props) => {
  //   console.log("FollowerList", props.followers);
  return (
    <div classname="followerlist">
      {props.followers.map((follower) => (
        <UserCard />
      ))}
    </div>
  );
};

export default FollowerList;

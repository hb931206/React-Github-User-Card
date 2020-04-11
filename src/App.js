import React from "react";
import UserCard from "./components/UserCard";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      henry: {},
      followers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/hb931206")
      .then((res) => res.json())
      .then((user) => {
        this.setState({ henry: user });
        console.log(this.state.henry);
      })
      .catch((err) => {
        console.log("Err:", err);
      });

    fetch("https://api.github.com/users/hb931206/followers")
      .then((rest) => rest.json())
      .then((follower) => {
        this.setState({ followers: follower });
        console.log(this.state.followers);
      })
      .catch((err) => {
        console.log("Err:", err);
      });
  }

  render() {
    return (
      <div className="App">
        <UserCard
          name={this.state.henry.name}
          image={this.state.henry.avatar_url}
          location={this.state.henry.location}
          followers={this.state.henry.followers}
          following={this.state.henry.following}
        />
      </div>
    );
  }
}

export default App;

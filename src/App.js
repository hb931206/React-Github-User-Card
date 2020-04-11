import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      henry: {},
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/hb931206")
      .then((res) => res.json())
      .then((user) => {
        console.log("Me:", user);
        this.setState({ henry: user });
        console.log(this.state.henry);
      })
      .catch((err) => {
        console.log("Err:", err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Henry</h1>
      </div>
    );
  }
}

export default App;

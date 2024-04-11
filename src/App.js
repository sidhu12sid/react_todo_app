import "./App.css";
import React, { Component } from "react";
import Todo from "./components/Todo";
class App extends Component {
  state={
    myString: "Hello every one welcome to the tutorial"
  }
  render() {
    return (
      <div className="App">
        <Todo myString = {this.state.myString} />
      </div>
    );
  }
}
export default App;

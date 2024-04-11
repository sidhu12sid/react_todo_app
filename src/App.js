import "./App.css";
import React, { Component } from "react";
import Forms from "./components/Forms";
class App extends Component {
  state={
    myString: "Hello every one welcome to the tutorial"
  }
  render() {
    return (
      <div className="App">
        <Forms/>
      </div>
    );
  }
}
export default App;

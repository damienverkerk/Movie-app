import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <Movies />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";

class Movie extends Component {
  state = {
    movie: "Creed"
  };
  render() {
    return (
      <div>
        <h2>
          <span className={this.handleClassName()}>{this.state.movie}</span>
        </h2>
      </div>
    );
  }
  handleIncrement = () => {};

  handleClassName = () => {
    const classname = "badge badge-warning m-2";
    return classname;
  };
}

export default Movie;

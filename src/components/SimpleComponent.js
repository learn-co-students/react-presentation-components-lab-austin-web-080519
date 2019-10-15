import React, { Component } from "react";

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  };
  componentDidMount() {
    this.state;
  }
  handleclick = () => {
    this.setState({
      mood: "sad"
    });
  };
  render() {
    return (
      <div onClick={this.handleclick}>
        <h1>{this.state.mood}</h1>
      </div>
    );
  }
}

export default SimpleComponent;

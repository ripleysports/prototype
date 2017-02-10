import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <h1>{this.props.params.playerName}</h1>
    );
  }
}
export default Player;
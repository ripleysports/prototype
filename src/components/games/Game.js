import React, { Component } from 'react';

class Game extends Component {
  render() {
    return (
      <h1>{this.props.params.gameName}</h1>
    );
  }
}
export default Game;
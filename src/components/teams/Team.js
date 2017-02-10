import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <h1>{this.props.params.teamName}</h1>
    );
  }
}
export default Team;
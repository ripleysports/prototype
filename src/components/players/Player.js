import React, { Component } from 'react';
import data from '../../data/data.json';
import _ from 'lodash';

class Player extends Component {

  render() {
    const player = _.find(data.players, (player) => player.slug === this.props.params.playerSlug);
    return (
      <div className="padding-1">
        <ul>
          {_.keys(player).map(function (key) {
              return (
                <li key={key}>
                  {player[key]}
                </li>
              )
            })}
        </ul>
      </div>
    );
  }
}
export default Player;
import React, { Component } from 'react';
import data from '../../data/data.json';
import _ from 'lodash';

class Game extends Component {
  render() {
    const game = _.find(data.games, (game) => game.slug === this.props.params.gameSlug);
    return (
      <div>
        <ul>
          {_.keys(game).map(function (key) {
              return (
                <li key={key}>
                  {game[key]}
                </li>
              )
            })}
        </ul>
      </div>
    );
  }
}
export default Game;
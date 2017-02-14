import React, { Component } from 'react';
import data from '../../data/data.json';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';

class Game extends Component {
  render() {
    const game = _.find(data.games, (game) => game.slug === this.props.params.gameSlug);
    return (
      <div className="padding-1">
        <Isvg src={rink} className=""> </Isvg>
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
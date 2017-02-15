import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import data from '../../data/data.json';

class GamesIndex extends Component {
  renderGameList() {
    return data.games.map(game => {
      const homeTeam = _.find(data.teams, (team) => team.id === game.home);
      const awayTeam = _.find(data.teams, (team) => team.id === game.away);
      const gameTeams = {
        home: homeTeam,
        away: awayTeam
      }
      return (
        <Link to={{pathname: `/games/${game.slug}`, state: gameTeams }} key={game.id} className="block">
          <div className="game-item flex align-center text-align-center">
            <div className="game-item__title">
              {homeTeam.name}
            </div>
            <div className="game-item__score">
            {game.homeScore}
            -
            {game.awayScore}
            </div>
            <div className="game-item__title">
              {awayTeam.name}
            </div>
          </div>
        </Link>
      );
      }
    );
  }
  render() {
    return (
      <div className="padding-1">
        <ul>
          {this.renderGameList()}
        </ul>
      </div>
    );
  }
}

export default GamesIndex;
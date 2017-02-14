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
        <Link to={{pathname: `/games/${game.slug}`, state: gameTeams }} key={game.id} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
          <div className="padding-1 padding-x">{homeTeam.name} vs {awayTeam.name}</div>
        </Link>
      );
      }
    );
  }
  render() {
    return (
      <div>
        <div className="padding-1 padding-bottom-0">
          <h1 className="bold margin-1 margin-bottom size-1-5">Pelit</h1>
        </div>
        <ul className="child-borders-y">
          {this.renderGameList()}
        </ul>
      </div>
    );
  }
}

export default GamesIndex;
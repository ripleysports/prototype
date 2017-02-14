import React, { Component } from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router';
import _ from 'lodash';

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: this.setTeam(),
    }
  }
  setTeam() {
    return _.find(data.teams, (team) => team.slug === this.props.params.teamSlug);
  }
  renderPlayers() {
    const team = this.state.team;
    const players = _.filter(data.players, (player) => _.includes(team.players, player.id));
    return players.map(player => {
      return (
          <Link to={`/players/${player.slug}`} key={player.id} className="block padding-0-25 size-0-75 padding-y border-color-gray-lighten-3 color-primary">
            {player.firstName} {player.lastName}
          </Link>)
    });
  }
  renderGames() {
    const team = this.state.team;
    const games = _.filter(data.games, (game) => _.includes([game.home, game.away], team.id))
    return games.map(game => {
        const homeTeam = _.find(data.teams, (team) => team.id === game.home);
        const awayTeam = _.find(data.teams, (team) => team.id === game.away);
        const gameTeams = {
          home: homeTeam,
          away: awayTeam
        }
        return (
          <Link to={`/games/${game.slug}`} key={game.id} className="block padding-0-25 size-0-75 padding-y border-color-gray-lighten-3 color-primary">
            {homeTeam.name} vs {awayTeam.name}
          </Link>
        );
      }
    );
  }
  render() {
    const team = _.find(data.teams, (team) => team.slug === this.props.params.teamSlug);
    return (
      <div className="padding-1">
        <h1 className="bold size-1-25">{this.state.team.name}</h1>
        <h2 className="bold size-1">Pelaajat</h2>
        <ul className="child-borders-y">
          {this.renderPlayers()}
        </ul>
        <h2 className="bold size-1">Pelit</h2>
        <ul className="child-borders-y">
          {this.renderGames()}
        </ul>
      </div>
    );
  }
}
export default Team;
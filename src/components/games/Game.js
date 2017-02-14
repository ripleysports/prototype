import React, { Component } from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.setGame(),
      teams: this.setTeams(),
      players: this.setPlayers()
    }
  }
  setGame() {
    return _.find(data.games, (game) => game.slug === this.props.params.gameSlug);
  }
  setPlayers() {
    const teams = this.setTeams();
    const homePlayers = _.filter(data.players, (player) => _.includes(teams.home.players, player.id));
    const awayPlayers = _.filter(data.players, (player) => _.includes(teams.away.players, player.id));
    const players = {
      "home": homePlayers,
      "away": awayPlayers
    }
    return players;
  }
  setTeams() {
    const game = this.setGame();
    const homeTeam = _.find(data.teams, (team) => team.id === game.home);
    const awayTeam = _.find(data.teams, (team) => team.id === game.away);

    const teams = {
      "home": homeTeam,
      "away": awayTeam
    }
    return teams;
  }
  renderTeamAttribute(team, key) {
    if (this.state.teams[team][key]) {
      return this.state.teams[team][key];
    }
  }
  renderPlayers(team) {
    const players = this.state.players[team];
    return players.map(player => {
      return (
          <Link to={`/players/${player.slug}`} key={player.id} className="block padding-0-25 size-0-75 padding-y border-color-gray-lighten-3 color-primary">
            {player.firstName} {player.lastName}
          </Link>)
    });
  }
  render() {
    return (
      <div>
        <div className="padding-1 padding-bottom-0">
          <Isvg src={rink} className=""> </Isvg>
        </div>
        <div className="padding-1">
          <div className="flex text-align-center margin-1 margin-bottom align-center">
            <h1 className="bold grow size-1-25">{this.renderTeamAttribute("home", "name")}</h1>
            <h1 className="bold size-2">{this.state.game.homeScore} - {this.state.game.awayScore}</h1>
            <h1 className="bold grow size-1-25">{this.renderTeamAttribute("away", "name")}</h1>
          </div>
          <div className="flex even-children">
            <ul className="child-borders-y margin-1 margin-right">
              {this.renderPlayers("home")}
            </ul>
            <ul className="child-borders-y">
              {this.renderPlayers("home")}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Game;
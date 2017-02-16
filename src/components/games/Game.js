import React, { Component } from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router';
import Slider from 'rc-slider';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.setGame(),
      teams: this.setTeams(),
      players: this.setPlayers(),
      moments: this.setMoments()
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
  setMoments() {
    const game = this.setGame();
    const moments = _.filter(data.moments, (moment) => _.includes(game.moments, moment.id));
    return moments;
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
          <Link to={`/players/${player.slug}`} key={player.id} className="block padding-0-5 size-0-75 padding-y border-color-primary-lighten-1">
            {player.firstName} {player.lastName}
          </Link>)
    });
  }
  renderMoments() {
    const moments = this.state.moments;
    return moments.map(moment => {
      return (
          <li key={moment.id} className="padding-0-5 border-color-primary-lighten-1">
          {moment.time}
          </li>
        )
    });
  }
  render() {
    return (
      <div className="grow flex vertical">
        <div className="flex justify align-center padding-0-5 bg-primary-darken-1">
          <div className="size-1 text-align-center grow">
            {this.renderTeamAttribute("home", "name")}
          </div>
          <div className=" padding-1 padding-x size-1-25 bold">
            {this.state.game.homeScore} - {this.state.game.awayScore}
          </div>
          <div className="size-1 text-align-center grow">
            {this.renderTeamAttribute("away", "name")}
          </div>
        </div>
        <div className="game-replay">
          <div className="flex">
            <div className="game-replay__moments">
              <ul className="child-borders-y">
                {this.renderMoments()}
              </ul>
            </div>
            <div className="game-replay__player">
              <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
            </div>
          </div>
          <div className="game-replay__controls">
            <Slider min={0} max={20} defaultValue={3} />
          </div>
        </div>
        <div className="grow bg-primary-darken-1">
        </div>
      </div>
    );
  }
}
export default Game;
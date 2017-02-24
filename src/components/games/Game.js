import React, { Component } from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router';
import Slider from 'rc-slider';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';
import watch from '../../images/icons/icon-watch.svg';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.setGame(),
      teams: this.setTeams(),
      players: this.setPlayers(),
      moments: this.setMoments(),
      momentSelected: false
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
  calculateMomentOffset(time) {
    const splitTime = /^(\d+):(\d+)$/.exec(time);
    const totalTime = (parseInt( splitTime[1]) * 60) + parseInt( splitTime[2] );
    const totalTimeOffset = totalTime - 15;

    let minutes = parseInt( (totalTimeOffset/ 60), 10 );
    let seconds = totalTimeOffset % 60;
    return `${("00" + minutes).slice(-2)}:${("00" + seconds).slice(-2)}`;
  }
  renderPlayers() {
    return (
      <div>
        <div className="width-0-5 height-0-5 round absolute bg-green" style={{top: "50%", left: "50%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-green" style={{top: "10%", left: "30%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-green" style={{top: "30%", left: "40%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-green" style={{top: "80%", left: "28%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-green" style={{top: "50%", left: "65%"}}></div>

        <div className="width-0-5 height-0-5 round absolute bg-red" style={{top: "20%", left: "50%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-red" style={{top: "10%", left: "70%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-red" style={{top: "90%", left: "60%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-red" style={{top: "60%", left: "40%"}}></div>
        <div className="width-0-5 height-0-5 round absolute bg-red" style={{top: "15%", left: "30%"}}></div>
      </div>
    )
  }
  renderMoments() {
    const moments = this.state.moments;
    return moments.map(moment => {
      return (
          <li key={moment.id} className="flex align-center child-margins-x-0-5 padding-0-5 border-color-primary-lighten-1 border-color-primary-lighten-1">
            <div className="grow flex align-center child-margins-x-0-5 pointer">
              <Isvg src={watch} className="fill-white width-1-5"> </Isvg>
              <div className="grow">
                <div className="size-0-75">
                  Momentti {moment.id}
                </div>
                <div>
                  {this.calculateMomentOffset(moment.time)}
                  -
                  {moment.time}
                </div>
              </div>
            </div>
            <Link to={`/coach/moment`} className="button button--small">
              Kommentit (2)
            </Link>
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
          <div className="padding-0-5 relative">
            {this.renderPlayers()}
            <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
          </div>
          <div className="game-replay__controls flex align-center">
            <div className="margin-0-5 margin-right size-0-75">
              00:00
            </div>
            <div className="grow">
              <Slider min={0} max={20} defaultValue={3} />
            </div>
            <div className="margin-0-5 margin-left size-0-75">
              {this.state.game.time}
            </div>
          </div>
        </div>
        <div className="game-replay__moments">
          <ul className="child-borders-y">
            {this.renderMoments()}
          </ul>
        </div>
        <div className="grow bg-primary-darken-1">
        </div>
      </div>
    );
  }
}
export default Game;
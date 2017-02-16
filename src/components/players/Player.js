import React, { Component } from 'react';
import { Link } from 'react-router';
import data from '../../data/data.json';
import _ from 'lodash';

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: this.setPlayer()
    }
  }
  setPlayer() {
    return _.find(data.players, (player) => player.slug === this.props.params.playerSlug);
  }
  renderMoments(){
    const player = this.state.player;
    const games = [];
    _.forEach(player.moments, function(moment) {
      let game = _.find(data.games, (game) => _.includes(game.moments, moment));
      game["playerMoment"] = moment;
      games.push(game);
    });

    return games.map(game => {
      const homeTeam = _.find(data.teams, (team) => team.id === game.home);
      const awayTeam = _.find(data.teams, (team) => team.id === game.away);
      const moment = _.find(data.moments, (moment) => moment.id === game.playerMoment);
      return (
        <Link to={`/games/${game.slug}`} key={moment.id} className="block padding-0-5 size-0-75 padding-y border-color-primary-lighten-1 color-white">
          <div className="flex align-center">
            <div className="grow margin-0-5 margin-right">
              {homeTeam.name} vs {awayTeam.name}
            </div>
            <div>
              {moment.time}
            </div>
          </div>
        </Link>)
    });
  }
  renderTeams() {
    const player = this.state.player;
    const teams = _.filter(data.teams, (team) => _.includes(team.players, player.id));
    return teams.map(team => {
      return (
        <Link to={`/teams/${team.slug}`} key={team.id} className="block padding-0-5 size-0-75 padding-y border-color-primary-lighten-1 color-white">
          {team.name}
        </Link>)
    });
  }
  renderStats() {
    return (
      <ul className="card-grid card-grid--bordered border-color-red text-align-center">
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Ottelut</h4>
            <div className="size-1">{this.state.player.matches}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Maalit</h4>
            <div className="size-1">{this.state.player.goals}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Peliaika</h4>
            <div className="size-1">{this.state.player.playTime}</div>
          </div>
        </li>
      </ul>
    )
  }
  render() {
    const player = this.state.player;
    return (
      <div className="grow flex vertical">
        <div className="padding-1 bg-primary-darken-1 text-align-center">
          <div className="width-3 height-3 round bg-secondary margin-auto-x"></div>
          <h1 className="bold size-1-25 margin-0-5 margin-top">{player.firstName} {player.lastName}</h1>
          <h2>{player.role}</h2>
        </div>
        <div className="padding-1">
          {this.renderStats()}
        </div>
        <div className="team grow flex even-children unflex-m bg-primary-darken-1">
          <div className="team__players padding-1">
            <h2 className="bold size-1 margin-0-5 margin-bottom">Momentit</h2>
            <ul className="child-borders-y">
              {this.renderMoments()}
            </ul>
          </div>
          <div className="team__games padding-1">
            <h2 className="bold size-1 margin-0-5 margin-bottom">Joukkueet</h2>
            <ul className="child-borders-y">
              {this.renderTeams()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
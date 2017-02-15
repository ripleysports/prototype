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
          <Link to={`/players/${player.slug}`} key={player.id} className="block padding-0-5 size-0-75 padding-y border-color-primary-lighten-1 color-white">
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
          <Link to={`/games/${game.slug}`} key={game.id} className="block padding-0-5 size-0-75 padding-y border-color-primary-lighten-1 color-white">
            {homeTeam.name} vs {awayTeam.name}
          </Link>
        );
      }
    );
  }
  renderStats() {
    return (
      <ul className="card-grid card-grid--bordered border-color-red text-align-center">
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Ottelut</h4>
            <div classname="size-1">{this.state.team.matches}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Maalit</h4>
            <div classname="size-1">{this.state.team.goals}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Päästetyt maalit</h4>
            <div classname="size-1">{this.state.team.goalsAgainst}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Voitot</h4>
            <div classname="size-1">{this.state.team.wins}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Tasapelit</h4>
            <div classname="size-1">{this.state.team.ties}</div>
          </div>
        </li>
        <li className="card-grid__item">
          <div className="">
            <h4 className="size-0-75 margin-0-25 margin-bottom">Häviöt</h4>
            <div classname="size-1">{this.state.team.lost}</div>
          </div>
        </li>
      </ul>
    )
  }
  render() {
    const team = _.find(data.teams, (team) => team.slug === this.props.params.teamSlug);
    return (
      <div className="grow flex vertical">
        <div className="padding-1 text-align-center bg-primary-darken-1">
          <h1 className="bold size-1-25">{this.state.team.name}</h1>
        </div>
        <div className="padding-1">
          {this.renderStats()}
        </div>
        <div className="team grow flex even-children unflex-m bg-primary-darken-1">
          <div className="team__players padding-1">
            <h2 className="bold size-1 margin-0-5 margin-bottom">Pelaajat</h2>
            <ul className="child-borders-y">
              {this.renderPlayers()}
            </ul>
          </div>
          <div className="team__games padding-1">
            <h2 className="bold size-1 margin-0-5 margin-bottom">Pelit</h2>
            <ul className="child-borders-y">
              {this.renderGames()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
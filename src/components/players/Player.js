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
  renderTeams() {
    const player = this.state.player;
    const teams = _.filter(data.teams, (team) => _.includes(team.players, player.id));
    return teams.map(team => {
      return (
        <Link to={`/teams/${team.slug}`} key={team.id} className="block padding-0-25 size-0-75 padding-y border-color-gray-lighten-3 color-primary">
          {team.name}
        </Link>)
    });
  }
  render() {
    const player = this.state.player;
    return (
      <div className="padding-1">
        <h1 className="bold size-1-5 margin-1 margin-bottom">{player.firstName} {player.lastName}</h1>
        <h2 className="bold size-1">Joukkueet</h2>
        <ul className="child-borders-y">
          {this.renderTeams()}
        </ul>
      </div>
    );
  }
}
export default Player;
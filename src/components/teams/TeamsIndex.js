import React, { Component } from 'react';
import { Link } from 'react-router';
import data from '../../data/data.json';

class TeamsIndex extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Joukkueet</h1>
        <ul className="child-margins-y-0-5">
          {data.teams.map(team =>
            <Link to={`/teams/${team.name.toLowerCase().replace(' ', '-')}`} key={team.name} className="block">
              {team.name}
            </Link>)
          }
        </ul>
      </div>
    );
  }
}
export default TeamsIndex;
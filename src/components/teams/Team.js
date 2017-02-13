import React, { Component } from 'react';
import data from '../../data/data.json';
import _ from 'lodash';

class Team extends Component {
  render() {
    const team = _.find(data.teams, (team) => team.slug === this.props.params.teamSlug);
    return (
      <div className="padding-1">
        <ul>
          {_.keys(team).map(function (key) {
              return (
                <li key={key}>
                  {team[key]}
                </li>
              )
            })}
        </ul>
      </div>
    );
  }
}
export default Team;
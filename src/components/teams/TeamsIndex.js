import React, { Component } from 'react';
import { Link } from 'react-router';
import data from '../../data/data.json';

class TeamsIndex extends Component {
  render() {
    return (
      <div>
        <div className="padding-1">
          <ul className="card-grid">
            {data.teams.map(team =>
              <div key={team.id} className="card-grid__item">
                <Link to={`/teams/${team.slug}`} key={team.id} className="card">
                  <div className="card__content align-end">
                    <div className="bg-white padding-0-5">
                      <h2 className="size-1 color-secondary">
                        {team.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default TeamsIndex;
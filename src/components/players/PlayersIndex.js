import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import data from '../../data/data.json';

class PlayersIndex extends Component {
  render() {
    return (
      <div>
        <div className="padding-1 padding-bottom-0">
          <h1 className="bold margin-1 margin-bottom size-1-5">Pelaajat</h1>
        </div>
        <ul className="child-borders-y">
          {data.players.map(player =>
            <Link to={`/players/${player.slug}`} key={player.id} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
              <div className="padding-1 padding-x">{player.firstName} {player.lastName}</div>
            </Link>)
          }
        </ul>
      </div>
    );
  }
}
export default PlayersIndex;
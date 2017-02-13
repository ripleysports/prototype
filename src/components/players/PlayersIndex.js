import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import data from '../../data/data.json';

class PlayersIndex extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Pelaajat</h1>
        <ul className="child-margins-y-0-5">
          {data.players.map(player =>
            <Link to={`/players/${player.slug}`} key={player.id} className="block">
              {player.firstName} {player.lastName}
            </Link>)
          }
        </ul>
      </div>
    );
  }
}
export default PlayersIndex;
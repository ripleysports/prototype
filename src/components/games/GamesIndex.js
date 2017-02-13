import React, { Component } from 'react';
import { Link } from 'react-router';
import data from '../../data/data.json';

class GamesIndex extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Pelit</h1>
        <ul className="child-borders-y">
          {data.games.map(game =>
            <Link to={`/games/${game.slug}`} key={game.id} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
              {game.name}
            </Link>)
          }
        </ul>
      </div>
    );
  }
}

export default GamesIndex;
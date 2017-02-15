import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import data from '../../data/data.json';
import Isvg from 'react-inlinesvg';
import chevron from '../../images/icons/icon-chevron-r.svg';

class PlayersIndex extends Component {
  render() {
    return (
      <div>
        <div className="padding-1 padding-top">
          <ul className="child-borders-y">
            {data.players.map(player =>
              <Link to={`/players/${player.slug}`} key={player.id} className="block padding-0-5 padding-y border-color-primary-lighten-1">
                <div className="flex align-center child-margins-x-1 padding-1 padding-x">
                  <div className="width-2 height-2 round bg-secondary"></div>
                  <div className="grow">{player.firstName} {player.lastName}</div>
                  <Isvg src={chevron} className="stroke-primary-lighten-2 width-0-75"> </Isvg>
                </div>
              </Link>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default PlayersIndex;
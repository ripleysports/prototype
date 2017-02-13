import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import GamesIndex from './components/games/GamesIndex';
import Game from './components/games/Game';
import TeamsIndex from './components/teams/TeamsIndex';
import Team from './components/teams/Team';
import PlayersIndex from './components/players/PlayersIndex';
import Player from './components/players/Player';

import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App} title="Ripley">
        <Route path="/games" title="Pelit">
          <IndexRoute component={GamesIndex} />
          <Route path="/games/:gameSlug" component={Game} />
        </Route>
        <Route path="/teams" title="Joukkueet">
          <IndexRoute component={TeamsIndex}/>
          <Route path="/teams/:teamSlug" component={Team} title="Joukkueet"/>
        </Route>
        <Route path="/players" title="Pelaajat">
          <IndexRoute component={PlayersIndex}/>
          <Route path="/players/:playerSlug" component={Player} title="Pelaajat"/>
        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);

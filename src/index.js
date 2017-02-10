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
        <Route path="/games" component={GamesIndex} title="Pelit"/>
        <Route path="/games/:gameName" component={Game} title="Pelit"/>
        <Route path="/teams" component={TeamsIndex} title="Joukkueet"/>
        <Route path="/teams/:teamName" component={Team} title="Joukkueet"/>
        <Route path="/players" component={PlayersIndex} title="Pelaajat"/>
        <Route path="/players/:playerName" component={Player} title="Pelaajat"/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);

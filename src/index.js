import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import GamesIndex from './components/games/GamesIndex';
import Game from './components/games/Game';
import TeamsIndex from './components/teams/TeamsIndex';
import PlayersIndex from './components/players/PlayersIndex';

import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App} title="Ripley">
        <Route path="/games" component={GamesIndex} title="Pelit"/>
        <Route path="/games/:gameName" component={Game} title="Pelit"/>
        <Route path="/teams" component={TeamsIndex} />
        <Route path="/players" component={PlayersIndex} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);

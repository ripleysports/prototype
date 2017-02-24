import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from './App';

import CoachIndex from './components/coach/CoachIndex';
import CoachGame from './components/coach/CoachGame';
import CoachMoment from './components/coach/CoachMoment';

import RecordStart from './components/record/RecordStart';
import RecordActive from './components/record/RecordActive';

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
        <IndexRedirect to="/coach" />
        <Route path="/coach" title="Valmennus">
          <IndexRoute component={CoachIndex} />
          <Route path="/coach/game" component={CoachGame} />
          <Route path="/coach/moment" component={CoachMoment} />
        </Route>
        <Route path="/record" title="Nauhoita">
          <IndexRoute component={RecordStart} />
          <Route path="/record/start" component={RecordStart} />
          <Route path="/record/active" component={RecordActive} />
        </Route>
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

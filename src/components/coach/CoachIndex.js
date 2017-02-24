import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import data from '../../data/data.json';
import Isvg from 'react-inlinesvg';
import chevron from '../../images/icons/icon-chevron-r.svg';
import message from '../../images/icons/icon-message.svg';

class CoachIndex extends Component {
  renderLatestRecording() {
    if (this.props.location.state && this.props.location.state.newRecording) {
      let seconds = Math.round(this.props.location.state.duration / 1000);
      let minutes = parseInt( (seconds / 60), 10 );
      seconds %= 60;
      const time = `${("00" + minutes).slice(-2)} : ${("00" + seconds).slice(-2)}`;
      return (
        <Link to='coach/game' className="new-recording padding-0-75 flex align-center child-margins-x-1">
          <div className="width-1-5 height-1-5 size-0-75 line-1-5 round bg-white color-secondary text-align-center">
            Uusi
          </div>
            <div className="grow">
              <div>
                {time}
              </div>
              <div className="size-0-75">
                Joukkue VS Joukkue
              </div>
            </div>
          <Isvg src={chevron} className="stroke-white width-0-75"> </Isvg>
        </Link>
      )
    }
  }
  renderGameList() {
    return data.games.map(game => {
      const homeTeam = _.find(data.teams, (team) => team.id === game.home);
      const awayTeam = _.find(data.teams, (team) => team.id === game.away);
      const gameTeams = {
        home: homeTeam,
        away: awayTeam
      }
      return (
        <Link to={`/coach/game`} key={game.id} className="flex align-center child-margins-x-0-5 padding-0-5 padding-y border-color-primary-lighten-1">
            <div className="width-1-5 height-1-5 size-0-75 line-1-5 round bg-secondary text-align-center">
              {game.date}
            </div>
            <div className="grow">
              <div>
                {game.time}
              </div>
              <div className="size-0-75">
                {homeTeam.name} VS {awayTeam.name}
              </div>
            </div>
            <Isvg src={chevron} className="stroke-primary-lighten-2 width-0-75"> </Isvg>
        </Link>
      );
      }
    );
  }
  render() {
    return (
      <div className="grow flex vertical">
        {this.renderLatestRecording()}
        <div className="coach-view grow flex even-children unflex-m grow">
          <div className="coach-view__recordings padding-1">
            <h2 className="size-1-25 bold margin-0-5 margin-bottom">Nauhoitukset</h2>
            <ul className="child-borders-y">
              {this.renderGameList()}
            </ul>
          </div>
          <div className="coach-view__chat padding-1">
          <h2 className="size-1-25 bold margin-0-5 margin-bottom">Momentti keskustelut</h2>
           <ul className="child-borders-y">
              <Link to={`/coach/moment`} className="flex align-center child-margins-x-0-5 padding-0-5 padding-y border-color-primary-lighten-1">
                <Isvg src={message} className="stroke-white width-1"> </Isvg>
                <div className="grow">
                  Pelaaja 1
                </div>
                <div className="width-1 height-1 size-0-75 line-1 round bg-green-darken-1 bold color-white text-align-center">
                  1
                </div>
              </Link>
              <Link to={`/coach/moment`} className="flex align-center child-margins-x-0-5 padding-0-5 padding-y border-color-primary-lighten-1">
                <Isvg src={message} className="stroke-white width-1"> </Isvg>
                <div className="grow">
                  Pelaaja 1, Pelaaja 2
                </div>
                <div className="width-1 height-1 size-0-75 line-1 round bg-green-darken-1 bold color-white text-align-center">
                  2
                </div>
              </Link>
              <Link to={`/coach/moment`} className="flex align-center child-margins-x-0-5 padding-0-5 padding-y border-color-primary-lighten-1">
                <Isvg src={message} className="stroke-white width-1"> </Isvg>
                <div className="grow">
                  Pelaaja 2, Pelaaja 3, +2
                </div>
              </Link>
              <Link to={`/coach/moment`} className="flex align-center child-margins-x-0-5 padding-0-5 padding-y border-color-primary-lighten-1">
                <Isvg src={message} className="stroke-white width-1"> </Isvg>
                <div className="grow">
                  Joukkue 2
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default CoachIndex;
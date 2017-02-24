import React, { Component } from 'react';
import _ from 'lodash';
import data from '../../data/data.json';
import { Link } from 'react-router';
import Slider from 'rc-slider';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';
import watch from '../../images/icons/icon-watch.svg';
import chevron from '../../images/icons/icon-chevron-r.svg';

class CoachGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      momentSelected: false
    };
  }
  calculateMomentOffset(time) {
    const splitTime = /^(\d+):(\d+)$/.exec(time);
    const totalTime = (parseInt( splitTime[1]) * 60) + parseInt( splitTime[2] );
    const totalTimeOffset = totalTime - 15;

    let minutes = parseInt( (totalTimeOffset/ 60), 10 );
    let seconds = totalTimeOffset % 60;
    return `${("00" + minutes).slice(-2)}:${("00" + seconds).slice(-2)}`;
  }
  onMomentClick() {
    this.setState({momentSelected: true})
  }
  saveMoment() {
   this.setState({momentSelected: false})
  }
  renderRink() {
    if (this.state.momentSelected) {
      return (
        <div>
          <div className="flex align-center margin-0-5 margin-bottom child-margins-x-0-5 padding-0-5 bg-secondary">
            <div className="grow">Valitse pelaajat</div>
            <div className="">
              <span className="button button--small button--ghost button--white">Kaikki</span>
            </div>
          </div>
          <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
          <div className="margin-0-5 margin-top text-align-center padding-0-5 bg-primary-darken-2">
            <span className="button button--green button--small" onClick={this.saveMoment.bind(this)}>Tallenna momentti</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="game-replay__player">
          <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
        </div>
      )
    }
  }
  renderMoments() {
    const game = _.find(data.games, (game) => game.id === 1);
    const moments = _.filter(data.moments, (moment) => _.includes(game.moments, moment.id));
    return moments.map(moment => {
      return (
          <li key={moment.id} className="flex align-center child-margins-x-0-5 padding-0-5 border-color-primary-lighten-1 border-color-primary-lighten-1">
            <div className="grow flex align-center child-margins-x-0-5 pointer" onClick={this.onMomentClick.bind(this)}>
              <Isvg src={watch} className="fill-white width-1-5"> </Isvg>
              <div className="grow">
                <div className="size-0-75">
                  Momentti {moment.id}
                </div>
                <div>
                  {this.calculateMomentOffset(moment.time)}
                  -
                  {moment.time}
                </div>
              </div>
            </div>
            <Link to={`/coach/moment`} className="button button--small">
              Lähetä kommentti
            </Link>
          </li>
        )
    });
  }
  render() {
    return (
      <div className="flex vertical grow">
        <div className="flex justify align-center padding-0-5 bg-primary-darken-1">
          <div className="size-1 text-align-center grow">
            Joukkue
          </div>
          <div className=" padding-1 padding-x size-1-25 bold">
            1 - 1
          </div>
          <div className="size-1 text-align-center grow">
            Joukkue
          </div>
        </div>
        <div className="game-replay">
          {this.renderRink()}
          <div className="game-replay__controls flex align-center">
            <div className="margin-0-5 margin-right size-0-75">
              00:00
            </div>
            <div className="grow">
              <Slider min={0} max={20} defaultValue={3} />
            </div>
            <div className="margin-0-5 margin-left size-0-75">
              67:30
            </div>
          </div>
        </div>
        <div>
          <ul className="child-borders-y">
            {this.renderMoments()}
          </ul>
        </div>
        <div className="grow bg-primary-darken-1 padding-1 text-align-center">
          <Link to={`/games`} className="button">
            Arkistoi Peli
          </Link>
        </div>
      </div>
    );
  }
}
export default CoachGame;
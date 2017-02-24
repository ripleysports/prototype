import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';

let offset = null;
let interval = null;

class RecordTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      momentActive: false
    };
  }
  componentDidMount() {
    this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  startTimer() {
    offset = Date.now()
    interval = setInterval(this.runTimer.bind(this), 1000);
  }
  runTimer() {
    let duration = this.state.duration;
    duration += this.offsetTimer();
    this.setState({duration: duration});
  }
  offsetTimer() {
    let now = Date.now();
    let newOffset = now - offset;
    offset = now;
    return newOffset;
  }
  stopTimer() {
    clearInterval(interval);
  }
  renderTimer() {
    let seconds = Math.round(this.state.duration / 1000);
    let minutes = parseInt( (seconds / 60), 10 );
    seconds %= 60;
    return `${("00" + minutes).slice(-2)} : ${("00" + seconds).slice(-2)}`;
  }
  renderTeams(team) {
    if(this.props.location.state && this.props.location.state[team]) {
      return this.props.location.state[team];
    }
    else {
      return "Joukkue";
    }
  }
  onClickMoment() {
    this.setState({momentActive: true});
    setTimeout(() => {
      this.setState({momentActive: false});
    }, 1500);
  }
  renderMomentButtonTooltip() {
    if (this.state.momentActive) {
      return (
        <div className="moment-button__tooltip size-0-75">
          Momentti tallennettu
        </div>
      )
    }
  }
  render() {
    let momentActiveClass = "";
    if (this.state.momentActive) {
      momentActiveClass = "moment-button--active";
    }
    return (
      <div className="flex vertical grow">
        <div className="flex justify align-center padding-0-5 bg-primary-darken-1">
          <div className="size-1 text-align-center grow">
            {this.renderTeams("home")}
          </div>
          <div className=" padding-1 padding-x size-1-25 bold">
            0 - 0
          </div>
          <div className="size-1 text-align-center grow">
            {this.renderTeams("away")}
          </div>
        </div>
        <div className="padding-1 text-align-center">
          <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
        </div>
        <div className="flex align-center padding-1 justify">
          <div>
            <Link to={`/coach`} className="button button--round button--red button--ghost">
              Lopeta nauhoitus
            </Link>
          </div>
          <div className="size-1-25 bold">
            {this.renderTimer()}
          </div>
          <div className={`moment-button ${momentActiveClass}`}>
            {this.renderMomentButtonTooltip()}
            <span className={`button button--round`} onClick={this.onClickMoment.bind(this)}>Tallenna momentti</span>
          </div>
        </div>
      </div>
    );
  }
}
export default RecordTeams;
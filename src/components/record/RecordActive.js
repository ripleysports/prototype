import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';

const puckSize = 20;
const playerSize = 10;

class RecordTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0
    };
  }
  componentDidMount() {
    this.startTimer()

    setTimeout(() => {
      this.setRinkDimensions()
      this.startGame()
    }, 2000)

    window.addEventListener("resize", (event) => {
      this.setRinkDimensions()
    })
  }

  setRinkDimensions() {
    const rinkHeight = document.querySelector(".rink svg").clientHeight;
    const rinkWidth = rinkHeight * 1.91;

    this.setState({
      rinkHeight: rinkHeight,
      rinkWidth: rinkWidth
    });
  }

  componentWillUnmount() {
    this.stopTimer()
    this.stopGame()
  }

  generatePlayers() {
    let players = []

    for (let i = 0, l = 10; i < l; i++) {
      let color;
      if (i > 5) {
        color = "green";
      } else {
        color = "red";
      }

      players.push({color: color, x: 50, y: 50})
    }

    return players
  }

  startGame() {
    this.setState({
      gameVisible: true,
      puckX: 50,
      puckY: 50,
      players: this.generatePlayers()
    })

    this.puckInterval = setInterval(this.runPuck.bind(this), 550);

    let playerIntervals = [];

    for (let i = 0, l = 10; i < l; i++) {
      playerIntervals.push(setInterval(this.runPlayer.bind(this, i), 100))
    }

    this.playersIntervals = playerIntervals
  }

  startTimer() {
    this.offset = Date.now()
    this.timerInterval = setInterval(this.runTimer.bind(this), 1000);
  }

  randomGamePosition(previousPosition) {
    let random = Math.random() * 100;

    if (previousPosition) {
      random = previousPosition + (random - previousPosition) / 2
    }

    return Math.min(95, Math.max(5, random));
  }

  runPuck() {
    if (Math.random() > 0.5) {
      const puckX = this.randomGamePosition()
      const puckY = this.randomGamePosition()
      this.setState({puckX: puckX, puckY: puckY})
    }
  }

  runPlayer(index) {
    if (Math.random() > 0.9) {
      const player = this.state.players[index]
      const newX = this.randomGamePosition(player.x)
      const newY = this.randomGamePosition(player.y)

      this.setState({
        players: [
          ...this.state.players.slice(0, index),
          {...player, x: newX, y: newY},
          ...this.state.players.slice(index + 1)
        ]
      })
    }
  }

  runTimer() {
    let duration = this.state.duration;
    duration += this.offsetTimer();

    this.setState({duration: duration});
  }
  offsetTimer() {
    let now = Date.now();
    let newOffset = now - this.offset;
    this.offset = now;
    return newOffset;
  }
  stopTimer() {
    clearInterval(this.timerInterval);
  }
  stopGame() {
    clearInterval(this.puckInterval);
    clearInterval(this.playersInterval);
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
    console.log("Momentti tallennettu")
  }

  renderGame() {
    if (!this.state.gameVisible) {
      return null
    }

    let elements = [
      <div
        key="puck"
        className="puck"
        style={{transition: "all 2.85s", transitionTimingFunction: "ease", borderRadius: puckSize, position: "absolute", width: puckSize, height: puckSize, top: `${this.state.puckY}%`, left: `${this.state.puckX}%`, background: "white"}}
      />
    ]

    return elements.concat(this.state.players.map((player, index) => {
      return (
        <div
          key={index}
          style={{transition: "all 2.85s", transitionTimingFunction: "ease", position: "absolute", top: `${player.y}%`, left: `${player.x}%`, borderRadius: playerSize, width: playerSize, height: playerSize, background: player.color}}
        />
      )
    }))
  }

  render() {
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
        <div className="flex">
          <div className="padding-1" style={{position: "width: 100%; absolute"}}>
            <div className="rink-container" style={{height: this.state.rinkHeight, width: this.state.rinkWidth, margin: "auto", position: "relative"}}>
              {this.renderGame()}
            </div>
          </div>
        </div>
        <div className="padding-1 text-align-center">
          <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
        </div>
        <div className="flex align-center padding-1 justify">
          <div>
            <Link to={`/record/ended`} className="button button--round button--red button--ghost">
                Lopeta nauhoitus
            </Link>
          </div>
          <div className="size-1-25 bold">
            {this.renderTimer()}
          </div>
          <div>
            <span className="button button--round" onClick={this.onClickMoment.bind(this)}>Tallenna momentti</span>
          </div>
        </div>
      </div>
    );
  }
}
export default RecordTeams;

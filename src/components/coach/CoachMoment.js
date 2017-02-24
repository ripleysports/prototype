import React, { Component } from 'react';
import Slider from 'rc-slider';
import Isvg from 'react-inlinesvg';
import rink from '../../images/rink.svg';

class CoachMoment extends Component {
  render() {
    return (
      <div className="flex vertical grow">
        <div className="game-replay">
          <div className="game-replay__player">
            <Isvg src={rink} className="stroke-white fill-transparent rink"> </Isvg>
          </div>
          <div className="padding-1 flex align-center">
            <div className="margin-0-5 margin-right size-0-75">
              00:00
            </div>
            <div className="grow">
              <Slider min={0} max={20} defaultValue={3} />
            </div>
            <div className="margin-0-5 margin-left size-0-75">
              00:15
            </div>
          </div>
        </div>
        <div className="chat bg-primary-darken-1 grow flex vertical">
          <div className="grow child-margins-y-1">
            <div>
              <div className="chat__bubble margin-0-5 margin-bottom">
                Katsokaa sijoittuminen tässä hyökkäystilanteessa
              </div>
              <div className="size-0-75 text-align-right padding-1 padding-right">
                Valmentaja
              </div>
            </div>
            <div>
              <div className="chat__bubble chat__bubble--reply margin-0-5 margin-bottom">
                Pelaajan vastaus
              </div>
              <div className="size-0-75 padding-1 padding-left">
                Pelaaja
              </div>
            </div>
          </div>
          <div className="chat__input flex align-center">
            <div className="grow">
              <input type="text" placeholder="Kirjoita kommentti" />
            </div>
            <a href="#" className="button button--square">Lähetä</a>
          </div>
        </div>
      </div>
    );
  }
}
export default CoachMoment;
import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import navIconGraph from './images/icons/icon-tab-graph.svg';

class App extends Component {
  render() {
    return (
      <div className="frame">
        <div className="title-bar">
          <div className="title-bar__middle">
            <h1 className="title-bar__title"> Title </h1>
          </div>
        </div>
        <div className="padding-1">
          <h1 className="size-1-5">Ripley prototype</h1>
        </div>
        <div className="tab-bar">
          <a href="#" className="tab-bar__link">
            <Isvg src={navIconGraph} className="tab-bar__icon width-1"> </Isvg>
            <span className="tab-bar__label">Nav link</span>
          </a>
          <a href="#" className="tab-bar__link">
            <Isvg src={navIconGraph} className="tab-bar__icon width-1"> </Isvg>
            <span className="tab-bar__label">Nav link</span>
          </a>
          <a href="#" className="tab-bar__link">
            <Isvg src={navIconGraph} className="tab-bar__icon width-1"> </Isvg>
            <span className="tab-bar__label">Nav link</span>
          </a>
          <a href="#" className="tab-bar__link">
            <Isvg src={navIconGraph} className="tab-bar__icon width-1"> </Isvg>
            <span className="tab-bar__label">Nav link</span>
          </a>
          <a href="#" className="tab-bar__link">
            <Isvg src={navIconGraph} className="tab-bar__icon width-1"> </Isvg>
            <span className="tab-bar__label">Nav link</span>
          </a>
        </div>
      </div>
    );
  }
}

export default App;

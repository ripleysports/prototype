import React, { Component } from 'react';
import NavLink from './components/NavLink';
import navIconGraph from './images/icons/icon-tab-graph.svg';
import RecordIndex from './components/record/RecordIndex';

class App extends Component {
  renderTitle() {
   if (this.props.router.routes) {
      for (var i = this.props.router.routes.length - 1; i >= 0; i--) {
        if (this.props.router.routes[i].title) {
          return this.props.router.routes[i].title;
        }
      }
    } else {
      return "Ripley";
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="title-bar">
          <div className="title-bar__middle">
            <h1 className="title-bar__title"> {this.renderTitle()} </h1>
          </div>
        </div>

        <div className="padding-1">
          {this.props.children || <RecordIndex/>}
        </div>

        <div className="tab-bar">
          <NavLink to="/" onlyActiveOnIndex={true} icon={navIconGraph} label="Nauhoita" />
          <NavLink to="/games" icon={navIconGraph} label="Pelit" />
          <NavLink to="/teams" icon={navIconGraph} label="Joukkueet" />
          <NavLink to="/players" icon={navIconGraph} label="Pelaajat" />
        </div>
      </div>
    );
  }
}

export default App;

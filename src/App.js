import React, { Component } from 'react';
import NavLink from './components/NavLink';
import tabIconWhistle from './images/icons/icon-tab-whistle.svg';
import tabIconPuck from './images/icons/icon-tab-puck.svg';
import tabIconSticks from './images/icons/icon-tab-sticks.svg';
import tabIconShirt from './images/icons/icon-tab-shirt.svg';
import tabIconHelmet from './images/icons/icon-tab-helmet.svg';
import CoachIndex from './components/coach/CoachIndex';

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

        <div className="flex vertical grow">
          {this.props.children || <CoachIndex/>}
        </div>

        <div className="tab-bar">
          <NavLink to="/coach" icon={tabIconWhistle} label="Valmennus" />
          <NavLink to="/games" icon={tabIconPuck} label="Pelit" />
          <NavLink to="/record" icon={tabIconSticks} label="Uusi peli" />
          <NavLink to="/teams" icon={tabIconShirt} label="Joukkueet" />
          <NavLink to="/players" icon={tabIconHelmet} label="Pelaajat" />
        </div>
      </div>
    );
  }
}

export default App;

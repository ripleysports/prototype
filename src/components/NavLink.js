// modules/NavLink.js
import React, { Component } from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

class NavLink extends Component {
  render() {
    return (
      <Link {...this.props} className="tab-bar__link" activeClassName="tab-bar__link--active">
        <Isvg src={this.props.icon} className="tab-bar__icon width-1"> </Isvg>
        <span className="tab-bar__label">{this.props.label}</span>
      </Link>
    );
  }
}
export default NavLink;
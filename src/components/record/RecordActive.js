import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordTeams extends Component {
  render() {
    return (
      <div className="padding-1 text-align-center">
        <h1 className="bold margin-1 margin-bottom size-1-5">Nauhoitus käynnissä</h1>
        <p className="margin-1 margin-bottom">Tallenna momentti</p>
        <Link to={`/record/ended`} className="color-primary">
          Lopeta nauhoitus
        </Link>
      </div>
    );
  }
}
export default RecordTeams;
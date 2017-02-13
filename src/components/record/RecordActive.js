import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordTeams extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Nauhoitus käynnissä</h1>
        <p>Tallenna momentti</p>
        <Link to={`/record/ended`} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
          Lopeta nauhoitus
        </Link>
      </div>
    );
  }
}
export default RecordTeams;
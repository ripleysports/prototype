import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordTeams extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Nauhoitus valmis</h1>
        <p>Momentit</p>
        <Link to={`/`} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
          Arkistoi
        </Link>
      </div>
    );
  }
}
export default RecordTeams;
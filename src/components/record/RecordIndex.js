import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordIndex extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Nauhoitus</h1>
        <Link to={`/record/start`} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
          Uusi peli
        </Link>
      </div>
    );
  }
}
export default RecordIndex;
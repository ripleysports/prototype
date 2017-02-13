import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordIndex extends Component {
  render() {
    return (
      <div className="padding-1 text-align-center">
        <h1 className="bold margin-1 margin-bottom size-1-5">Nauhoitus</h1>
        <Link to={`/record/start`} className="color-primary">
          Uusi peli
        </Link>
      </div>
    );
  }
}
export default RecordIndex;
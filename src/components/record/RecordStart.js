import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordStart extends Component {
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Valitse joukkueet</h1>
        <Link to={`/record/active`} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
          Aloita nauhoitus
        </Link>
      </div>
    );
  }
}
export default RecordStart;
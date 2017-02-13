import React, { Component } from 'react';
import { Link } from 'react-router';
import MultiPicker from 'rmc-picker/lib/MultiPicker.web';
import data from '../../data/data.json';
import _ from 'lodash';

class RecordStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.getTeams(),
      value: [1, 2],
    };
  }
  onChange(value) {
    console.log('onChange', value);
    this.setState({
      value
    });
  }
  getTeams() {
    let teamsList = [
      {
        key: 'col1',
        props: {
          children: [

          ]
        }
      },
      {
        key: 'col2',
        props: {
          children: [
          ]
        }
      }
    ];
    _.forEach(teamsList, function(column) {
      data.teams.map(team =>
        column.props.children.push(
          {
            label: team.name,
            value: team.id
          }
        )
      );
    });
    return teamsList;
  }
  render() {
    return (
      <div>
        <h1 className="bold margin-1 margin-bottom size-1-5">Valitse joukkueet</h1>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange.bind(this)}
        >
          {this.state.items}
        </MultiPicker>
        <Link to={`/record/active`} className="block padding-0-5 padding-y border-color-gray-lighten-3 color-primary">
          Aloita nauhoitus
        </Link>
      </div>
    );
  }
}
export default RecordStart;
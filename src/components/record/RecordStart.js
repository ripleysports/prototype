import React, { Component } from 'react';
import update from 'immutability-helper';
import { Link } from 'react-router';
import MultiPicker from 'rmc-picker/lib/MultiPicker.web';
import data from '../../data/data.json';
import _ from 'lodash';

class RecordStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeams: [1, 2],
    };
  }
  componentWillMount() {
    this.setState({teams: this.getTeams(this.state.selectedTeams)});
  }
  onChange(value) {
    const oldSelected = this.state.selectedTeams;
    const newSelected = update(oldSelected, {$set: value} );
    const oldTeams = this.state.teams;
    const newTeams = update(oldTeams, {$set: this.getTeams(newSelected)} );
    this.setState({
      teams: newTeams,
      selectedTeams: newSelected
    });
  }
  getTeams(selectedTeams) {
    const teamOptions = data.teams.map(team => {
      return {
        label: team.name,
        value: team.id
      }
    });

    const homeTeam = teamOptions.filter((option) => option.value != selectedTeams[1])
    const awayTeam = teamOptions.filter((option) => option.value != selectedTeams[0])

    const teamsList = [
      {
        key: 'col1',
        props: {
          children: homeTeam
        }
      },
      {
        key: 'col2',
        props: {
          children: awayTeam
        }
      }
    ];
    return teamsList;
  }
  render() {
    return (
      <div className="flex grow vertical">
        <div className="padding-1 text-align-center padding-bottom-0">
          <h1 className="margin-1 margin-top size-1-25">Valitse joukkueet</h1>
        </div>
        <div className="margin-2 margin-bottom">
          <MultiPicker
            selectedValue={this.state.selectedTeams}
            onValueChange={this.onChange.bind(this)}
          >
            {this.state.teams}
          </MultiPicker>
        </div>
        <div className="padding-1 text-align-center">
          <Link to={`/record/active`} className="button button--round">
            Aloita nauhoitus
          </Link>
        </div>
      </div>
    );
  }
}
export default RecordStart;
import React, { Component } from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';
import chevron from '../../images/icons/icon-chevron-r.svg';

class CoachIndex extends Component {
  render() {
    return (
      <div>
        <div className="coach-view grow flex even-children unflex-m bg-primary-darken-1">
          <div className="coach-view__recordings padding-1">
            <h2 className="size-1-25 margin-0-5 margin-bottom">Viimeisimmät nauhoitukset</h2>
            <ul className="child-borders-y">
              <li className="flex align-center child-margins-x-0-5 padding-0-5 border-color-primary-lighten-1">
                  <div>20.12.2016</div>
                  <div className="grow">Joukkue 1 vs Joukkue 2</div>
                  <Isvg src={chevron} className="stroke-primary-lighten-2 width-0-75"> </Isvg>
              </li>
              <li className="flex align-center child-margins-x-1 padding-0-5 border-color-primary-lighten-1">
                Peli
              </li>
            </ul>
          </div>
          <div className="coach-view__chat padding-1">
          <h2 className="size-1-25 margin-0-5 margin-bottom">Keskustelu</h2>
           <ul>
              <li>
                Keskustelu
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default CoachIndex;
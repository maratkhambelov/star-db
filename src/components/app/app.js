import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import { SwapiServiceProvider } from "../swapi-service-context";

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  render() {

    return (

        <ErrorBoundry>
            <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet/>
                    <PeoplePage/>

                    <PlanetsPage/>

                    <StarshipsPage/>
                    {/*<Row*/}
                    {/*    left={<PlanetList/>}*/}
                    {/*    right={<PlanetDetails itemId={11} />}*/}
                    {/*/>*/}

                </div>
            </SwapiServiceProvider>
        </ErrorBoundry>
    );
  }
}

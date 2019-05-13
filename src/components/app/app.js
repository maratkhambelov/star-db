import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import './app.css';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
      isLoggedIn: false
  };
  onLogin = () => {
      this.setState( {
          isLoggedIn: true

      })
  }

  render() {

      return (

          <ErrorBoundry>
              <SwapiServiceProvider value={this.swapiService}>
                  <Router>
                      <div className="stardb-app">
                          <Header />
                          <RandomPlanet/>
                          <Switch>

                              <Route path="/" render={() => <h2>Welcome to StarDB</h2>}
                                     exact/>
                                     <Route path="/people" component={PeoplePage}/>

                                     <Route path="/planets" component={PlanetsPage}/>
                                    <Route path="/starships" exact component={StarshipsPage}/>
                                    <Route path="/starships/:id"
                                           render={({ match }) => {
                                               const { id } = match.params;
                                               console.log(match)
                                               return <StarshipDetails itemId={ id }/>
                                    }}/>
                                    <Redirect to="/" />
                          </Switch>
                    </div>
                    </Router>

            </SwapiServiceProvider>
        </ErrorBoundry>
    );
  }
}

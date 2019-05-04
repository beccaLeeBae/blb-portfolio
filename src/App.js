import React, { Component } from "react";
import Home from "./components/Home";
import SingleProj from "./components/SingleProj";
import Footer from "./components/Footer";
import projectsData from "./utilities/projects.json";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home projectsData={projectsData} />
            )}
          />
          <Route
            path="/:project"
            render={({ match }) => (
              <SingleProj
                match={match}
                projectsData={projectsData}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

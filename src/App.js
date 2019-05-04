import React, { Component } from "react";
import Home from "./components/Home";
import SingleProj from "./components/SingleProj";
import Footer from "./components/Footer";
import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home />}
          />
          <Route
            path="/:project"
            render={({ match }) => (<SingleProj match={match} />)}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
};

export default withRouter(props => <App {...props}/>);
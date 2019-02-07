import React, { Component } from "react";
import Home from "./components/Home/Home";
import SingleProj from "./components/SingleProj/SingleProj";
import Footer from "./components/Footer/Footer";
import EmailIcon from "./assets/email.png";
import LinkedInIcon from "./assets/linkedin.png";
import projectsList from './utilities/projects.json';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      copyrightYear: new Date().getFullYear(),
      links: [
        {
          href: "mailto:beccaleebae@gmail.com",
          icon: EmailIcon,
          title: "Email"
        },
        {
          href: "https://www.linkedin.com/in/beccaleebae/",
          icon: LinkedInIcon,
          title: "LinkedIn"
        }
      ],
      work: projectsList
    };
    this.scrollToContent = this.scrollToContent.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.checkIfInView = this.checkIfInView.bind(this);
  }
  scrollToContent() {
    document.querySelector(".work-container").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  handleMouseEnter(i) {
    let w = this.state.work;
    w[i].hovering = true;
    this.setState({ w });
  }
  handleMouseLeave(i) {
    let w = this.state.work;
    w[i].hovering = false;
    this.setState({ w });
  }
  checkIfInView() {
    for (var i = 0; i < this.state.work.length; i++) {
      let el = document.querySelector(`#el-010${i}`);

      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      isVisible = elemTop < window.innerHeight && elemBottom >= 0;

      let w = this.state.work;

      if (isVisible === true) {
        w[i].visible = true;
        this.setState({ w });
      }
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                work={this.state.work}
                scrollToContent={this.scrollToContent}
                handleMouseLeave={this.handleMouseLeave}
                handleMouseEnter={this.handleMouseEnter}
                checkIfInView={this.checkIfInView}
              />
            )}
          />
          <Route
            path="/:id"
            render={({ match }) => (
              <SingleProj match={match} work={this.state.work} />
            )}
          />
        </Switch>
        <Footer links={this.state.links} copyrightYear={this.state.copyrightYear} />
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import Home from "./components/Home";
import SingleProj from "./components/SingleProj";
import Footer from "./components/Footer";
import EmailIcon from "./assets/email.png";
import LinkedInIcon from "./assets/linkedin.png";
import projectsData from "./utilities/projects.json";
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
      projectsData: projectsData
    };
    this.scrollToContent = this.scrollToContent.bind(this);
  }
  scrollToContent() {
    document.querySelector(".work-container").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
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
                projectsData={this.state.projectsData}
                scrollToContent={this.scrollToContent}
              />
            )}
          />
          <Route
            path="/:project"
            render={({ match }) => (
              <SingleProj
                match={match}
                projectsData={this.state.projectsData}
              />
            )}
          />
        </Switch>
        <Footer
          links={this.state.links}
          copyrightYear={this.state.copyrightYear}
        />
      </div>
    );
  }
}

export default App;

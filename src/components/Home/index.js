import React, { Component } from "react";
import Landing from "./Landing";
import ProjectGrid from "./ProjectGrid";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <ProjectGrid projectsData={this.props.projectsData} />
      </div>
    );
  }
}
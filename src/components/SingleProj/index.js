import React, { Component } from "react";
import ProjTools from "./ProjTools";
import SiteButton from "./SiteButton";
import projectsData from "../../utilities/projects.json";
import { Link } from "react-router-dom";
import "./SingleProj.css";

export default class SingleProj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projData: {
        services: [],
        tools: []
      }
    };
  }
  componentDidMount() {
    const p = projectsData.find(
      proj => proj.pathname === this.props.match.params.project
    );

    if (p === undefined) {
      window.location = "/";
    } else {
      document.title = `Becca Lee Bae | ${p.title}`;
      this.setState({ projData: p });
    }
  }
  render() {
  	const { projData } = this.state;
    return (
      <div className="single-proj-container">
        <p id="proj-title">{projData.title}</p>
        <small id="services">{projData.services.join(", ")}</small>
        <p id="proj-desc" dangerouslySetInnerHTML={{__html: projData.description}}></p>
        {projData.wires && (
          <img
            className="img-lg-prev"
            src={projData.wires}
            alt={projData.title}
          />
        )}
        {projData.mockup && (
          <img
            src={`${projData.mockup}`}
            alt={projData.title}
          />
        )}
        <ProjTools p={projData} />
        <br />
        {projData.link && (
          <SiteButton link={projData.link} />
        )}
        <br />
        <Link to="/" id="back-btn">
          Back
        </Link>
      </div>
    );
  }
}
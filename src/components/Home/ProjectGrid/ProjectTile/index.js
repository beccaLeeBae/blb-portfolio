import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkItem.css";

export default class WorkItem extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter() {
    this.setState({ hovering: true });
  }
  handleMouseLeave() {
    this.setState({ hovering: false });
  }
  render() {
    let { item } = this.props;
    return (
      <div
        className="proj-tile"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <Link to={{ pathname: `/${item.pathname}` }}>
          {this.state.hovering && <p className="tile-text">{item.title}</p>}
          <img src={`${item.tileIcon}`} alt={item.title} />
        </Link>
      </div>
    );
  }
}
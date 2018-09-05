import React, { Component } from "react";
import Home from "./components/Home/Home";
import SingleProj from "./components/SingleProj/SingleProj";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          href: 'mailto:beccaleebae@gmail.com',
          title: 'Email'
        },
        {
          href: 'https://www.linkedin.com/in/rebekahbae/',
          title: 'LinkedIn'
        }
      ],
      work: [
        {
         id: 0, 
          src: "https://i.imgur.com/OyNcLBL.jpg",
          title: "Grace & Damon"
        },
        {
          id: 1,
          src: "https://i.imgur.com/1ebFH11.png",
          title: "The Vintage Voyageur"
        },
        {
          id: 2,
          src: "https://i.imgur.com/OyNcLBL.jpg",
          title: "Grace & Damon"
        },
        {
          id: 3,
          src: "https://i.imgur.com/OyNcLBL.jpg",
          title: "Grace & Damon"
        },
        {
          id: 4,
          src: "https://i.imgur.com/OyNcLBL.jpg",
          title: "Grace & Damon"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' render={() => <Home work={this.state.work}/>}/>
        <Route path='/:id' render={({ match }) => <SingleProj match={match} work={this.state.work}/>}/>
        </Switch>
        <Footer links={this.state.links}/>
      </div>
    );
  }
}

export default App;
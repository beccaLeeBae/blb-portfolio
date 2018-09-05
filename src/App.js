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
          description: 'As the sole front-end engineer of Hello Vera (a customer service AI startup), I was tasked with revamping their client-facing console. I designed and implemented a new layout, self-service onboarding, a multi-channel dashboard, report pages, and knowledge base import tools.',
          services: ['UX/UI Design', 'Front-End Web Development'],
          tools: ['JavaScript/jQuery', 'DataTables', 'Chart.js', 'CSS', 'Bootstrap', 'Sketch'],
          title: "Hello Vera"
        },
        {
          id: 1,
          src: "https://i.imgur.com/1ebFH11.png",
          description: "The Vintage Voyageur is a budding Amazon web series featuring unique and high-end vintage boutiques across the US. The creator and host, Allison Maldonado, wanted a website for the show that mirrored her fun and colorful personality. I built an interactive and content-rich experience to allow viewers to browse previous episodes and learn more about Allison.",
          services: ['UX/UI Design', 'Front-End Web Development', 'Press Kit Design'],
          tools: ['React', 'CSS', 'Bootstrap', 'Sketch', 'Photoshop'],
          title: "The Vintage Voyageur"
        },
        {
          id: 2,
          src: "https://i.imgur.com/OyNcLBL.jpg",
          description: "After finding out that my best friend was getting married, a website seemed like the perfect wedding gift. Grace and Damon's wedding website features a custom designed front-end with functionality such as browsing the wedding party, accessing the registry, and getting important information about the wedding day. Additonally, I built a guest RSVP API that integrates with the front-end to provide a seamless experience for attendees as well as an admin portal to manage RSVPs.",
          services: ['UX/UI Design', 'Web Development'],
          tools: ['React', 'Ruby on Rails', 'PostgreSQL', 'CSS', 'Bootstrap'],
          title: "Grace & Damon"
        },
        {
          id: 3,
          src: "https://i.imgur.com/OyNcLBL.jpg",
          description: '',
          services: [],
          tools: ['React', 'CSS', 'Bootstrap'],
          title: "Windows 98: Becca Lee Bae"
        },
        {
          id: 4,
          src: "https://i.imgur.com/OyNcLBL.jpg",
          description: "Woke was inspired by the widespread misuse of the word. In a small attempt to make people truly 'woke', I conceptualized and designed a website that provides a simple data visualization of the editorial choices made by three major news networks. As this was one of my earlier projects, I worked alongside back-end engineers to build the UI and flow.",
          services: [],
          tools: ['React', 'Node', 'CSS'],
          title: "Woke"
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
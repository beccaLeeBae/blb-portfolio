import React, { Component } from "react";
import Home from "./components/Home/Home";
import SingleProj from "./components/SingleProj/SingleProj";
import Footer from "./components/Footer/Footer";
import EmailIcon from './assets/email.png';
import LinkedInIcon from './assets/linkedin.png';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          href: "mailto:beccaleebae@gmail.com",
          icon: EmailIcon,
          title: "Email"
        },
        {
          href: "https://www.linkedin.com/in/rebekahbae/",
          icon: LinkedInIcon,
          title: "LinkedIn"
        }
      ],
      work: [
        {
          id: 0,
          title: "Hello Vera",
          imgSm: "https://i.imgur.com/0vcp4s7.png",
          imgLg: "https://i.imgur.com/3vq16Up.png",
          description:
            "As the sole front-end engineer of Hello Vera (a customer service AI startup), I was tasked with revamping their client-facing console. I designed and implemented a new layout, self-service onboarding, a multi-channel dashboard, report pages, and knowledge base import tools.",
          services: ["UX/UI Design", "Front-End Web Development"],
          tools: [
            "JavaScript/jQuery",
            "DataTables",
            "Chart.js",
            "CSS",
            "Bootstrap",
            "Sketch"
          ],
          hovering: false,
          visible: false
        },
        {
          id: 1,
          title: "The Vintage Voyageur",
          imgSm: "https://i.imgur.com/Aqiey8U.png",
          imgLg: "https://i.imgur.com/1BZhvRo.png",
          link: "http://thevintagevoyageur.com",
          description:
            "The Vintage Voyageur is a budding Amazon web series featuring unique and high-end vintage boutiques across the US. The creator and host, Allison Maldonado, wanted a website for the show that mirrored her fun and colorful personality. I built an interactive and content-rich experience to allow viewers to browse previous episodes and learn more about Allison.",
          services: [
            "UX/UI Design",
            "Front-End Web Development",
            "Press Kit Design"
          ],
          tools: ["React", "CSS", "Bootstrap", "Sketch", "Photoshop"],
          hovering: false,
          visible: false
        },
        {
          id: 2,
          title: "Grace & Damon",
          imgSm: "https://i.imgur.com/TYrqkDG.png",
          imgLg: "https://i.imgur.com/v6yAJ1r.png",
          link: "http://graceanddamon.com",
          description:
            "After finding out that my best friend was getting married, a website seemed like the perfect wedding gift. Grace and Damon's wedding website features a custom designed front-end with functionality such as browsing the wedding party, accessing the registry, and getting important information about the wedding day. Additonally, I built a guest RSVP API that integrates with the front-end to provide a seamless experience for attendees as well as an admin portal to manage RSVPs.",
          services: ["UX/UI Design", "Web Development"],
          tools: ["React", "Ruby on Rails", "PostgreSQL", "CSS", "Bootstrap"],
          hovering: false,
          visible: false
        },
        {
          id: 3,
          title: "Windows 98: Becca Lee Bae",
          imgSm: "https://i.imgur.com/mOupaND.png",
          imgLg: "https://i.imgur.com/brxaLnf.png",
          link: "http://windows.beccaleebae.com",
          description:
            "As a curious and extremely bored 8-year-old, I learned how to code HTML and CSS on my dad's desktop computer (which ran on Windows 98). I built a small site on Yahoo GeoCities offering pre-made web layouts and custom GIFs. After months of trying to find the site in the Internet Archive, I decided to make my portfolio site an homage to my earliest coding memories.",
          services: ['Front-End Web Development'],
          tools: ["React", "CSS", "Bootstrap"],
          hovering: false,
          visible: false
        },
        {
          id: 4,
          title: "Woke",
          imgSm: "https://i.imgur.com/brkNsAw.png",
          imgLg: "https://i.imgur.com/vUJ0Oa2.png",
          link: "http://woke.surge.sh",
          description:
            "Woke was inspired by the widespread misuse of the word. In a small attempt to make people truly 'woke', I conceptualized and designed a website that provides a simple data visualization of the editorial choices made by three major news networks. As this was one of my earlier projects, I worked alongside back-end engineers to build the UI and flow.",
          services: ['UX/UI design', 'Web Development'],
          tools: ["React", "Node", "CSS"],
          hovering: false,
          visible: false
        }
      ]
    };
    this.scrollToContent = this.scrollToContent.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.checkIfInView = this.checkIfInView.bind(this);
  }
  scrollToContent() {
    document.querySelector('.work-container').scrollIntoView({
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
    for(var i=0; i < this.state.work.length; i++) {
    let el = document.querySelector(`#el-010${i}`);

    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
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
        <Footer links={this.state.links} />
      </div>
    );
  }
}

export default App;
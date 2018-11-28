import React, { Component } from "react";
import Home from "./components/Home/Home";
import SingleProj from "./components/SingleProj/SingleProj";
import Footer from "./components/Footer/Footer";
import EmailIcon from "./assets/email.png";
import LinkedInIcon from "./assets/linkedin.png";
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
          title: "Toreador Films",
          imgSm: "https://i.imgur.com/YAHUCST.png",
          imgLgPrev: 'https://i.imgur.com/TlGsPlR.png',
          imgLg: "https://i.imgur.com/uHbik8X.png",
          link: 'http://toreadorfilms.com',
          description:
            "Toreador Films is a film production company based in Brooklyn, NY. The founder, Alexandre Pulido, was looking to move the company’s website off of Squarespace in search of a customized digital experience for potential clients and general visitors. In order to give users a more fully-featured concept of Toreador Films, I opted for a minimalist UI/UX design with a focus on visual and text content. I began by reorganizing the information architecture of the existing site and built hi-fidelity wireframes to communicate the new user flow. Once the design decisions were finalized, I began the front-end development using React and built a custom CMS using Ruby on Rails and ActiveAdmin.",
          services: ["Full-Stack Development", "UI/UX Design", "Custom CMS"],
          tools: [
            "React",
            "Ruby on Rails",
            "AWS (RDS & EC2)",
            "PostgreSQL",
            "CSS",
            "Sketch"
          ],
          hovering: false,
          visible: false
        },
        {
          id: 1,
          title: "Hello Vera",
          imgSm: "https://i.imgur.com/0vcp4s7.png",
          imgLg: "https://i.imgur.com/3vq16Up.png",
          description:
            "As the sole front-end engineer of Hello Vera (a customer service AI startup), I was tasked with redesigning and developing the client-facing console. The previous console offered many useful AI management features for clients, but the UI and UX was not clear enough for them to take full advantage of these tools. Utilizing the feedback from meetings with clients, I redesigned the user flow for the entire console, making toggling between and managing different channels much easier. Throughout the redesign process, I designed and developed a new navigation, self-service on-boarding, a multi-channel dashboard, analytics pages, and knowledge base import tools.",
          services: ["Front-End Development", "UI/UX Design"],
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
          id: 2,
          title: "The Vintage Voyageur",
          imgSm: "https://i.imgur.com/Aqiey8U.png",
          imgLg: "https://i.imgur.com/1BZhvRo.png",
          link: "http://thevintagevoyageur.com",
          description:
            "The Vintage Voyageur is a budding Amazon web series featuring unique and high-end vintage boutiques across the US. The creator and host, Allison Maldonado, wanted a website for the show that mirrored her fun and colorful personality. I built an interactive and content-rich experience to allow viewers to browse previous episodes and learn more about Allison.",
          services: [
            "Front-End Development",
            "UI/UX Design",
            "Press Kit Design"
          ],
          tools: ["React", "CSS", "Bootstrap", "Sketch", "Photoshop"],
          hovering: false,
          visible: false
        },
        {
          id: 3,
          title: "Grace & Damon",
          imgSm: "https://i.imgur.com/TYrqkDG.png",
          imgLg: "https://i.imgur.com/v6yAJ1r.png",
          link: "http://graceanddamon.com",
          description:
            "After finding out that my best friend was getting married, a website seemed like the perfect wedding gift. Grace and Damon's wedding website features a custom designed front-end with functionality such as browsing the wedding party, accessing the registry, and getting important information about the wedding day. Additonally, I built a guest RSVP API that integrates with the front-end to provide a seamless experience for attendees as well as an admin portal to manage RSVPs.",
          services: ["Full-Stack Development", "UI/UX Design"],
          tools: ["React", "Ruby on Rails", "Heroku", "PostgreSQL", "CSS", "Bootstrap"],
          hovering: false,
          visible: false
        },
        {
          id: 4,
          title: "Windows 98: Becca Lee Bae",
          imgSm: "https://i.imgur.com/mOupaND.png",
          imgLg: "https://i.imgur.com/brxaLnf.png",
          link: "http://windows.beccaleebae.com",
          description:
            "As a curious and extremely bored 8-year-old, I taught myself HTML and CSS on my dad's desktop computer (which ran on Windows 98). I built a small site on Yahoo GeoCities offering pre-made web layouts and custom GIFs. After months of searching for the site in the Internet Archive to no avail, I gave up and decided to make my portfolio site an homage to my earliest coding memories.",
          services: ["Front-End Development"],
          tools: ["React", "CSS", "Bootstrap"],
          hovering: false,
          visible: false
        },

        {
          id: 5,
          title: "Woke",
          imgSm: "https://i.imgur.com/brkNsAw.png",
          imgLg: "https://i.imgur.com/vUJ0Oa2.png",
          link: "http://woke.surge.sh",
          description:
            "Woke was inspired by the widespread misuse of the word. In a small attempt to make people truly 'woke', I conceptualized and designed a website that provides a simple data visualization of the editorial choices made by three major news networks. As this was one of my earlier projects, I worked alongside back-end engineers to build the UI and flow.",
          services: ["Full-Stack Development", "UI/UX Design"],
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
        <Footer links={this.state.links} />
      </div>
    );
  }
}

export default App;
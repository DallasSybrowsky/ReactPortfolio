import React from "react";
import "./about.css";
import ME from "../../assets/Dallas.JPG"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="Image of Dallas" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward classname="about__icon"/>
            <h5>Experience</h5>
            <small>12+ years Sales Experience</small>
          </article>
          <article className="about__card">
            <FiUsers classname="about__icon"/>
            <h5>Clients</h5>
            <small>Seeking Clients</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary classname="about__icon"/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>
        <p>
        My name is Dallas Sybrowsky and I have a B.S. in Biochemistry and Cell Biology from UC San Diego. After working in sales for 12 years I moved on to pursue a career in coding. I'm interested in software engineering and I'm looking forward to partnering with you to build software that can improve the productivity and lives of users. This is a portfolio of my work as a full-stack developer. It's a work in progress so please feel free to browse the projects I've completed and keep an eye out for new additions coming soon!
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>
  )
};

export default About;

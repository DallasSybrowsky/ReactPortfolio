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
        My name is Dallas Sybrowsky and I am a full stack developer. I'm always adding new content so keep an eye out for new additions!
        </p>
        <a href="#contact" className="btn btn-primary">Contact me</a>
      </div>
    </div>
  </section>
  )
};

export default About;

import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* Box 1 */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
          </ul>
        </article>
        {/* Box 2 */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>High Quality </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
          </ul>
        </article>
        {/* Box 3 */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placeholder</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

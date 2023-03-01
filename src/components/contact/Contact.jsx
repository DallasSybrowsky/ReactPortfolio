import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:dallas.sybrowsky@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <a href="tel:9512845858">Click to call me</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your name here"
            required
          />
          <input type="email" name="email" placeholder="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/bibliomaniaHomepage.jpg"
import IMG2 from "../../assets/hptrQuiz.png"
import IMG3 from "../../assets/JATE.png"
import IMG4 from "../../assets/FidoFind.png"
import IMG5 from "../../assets/weather.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bibliomania",
    github: "https://github.com/DallasSybrowsky/Bibliomania",
    demo: "https://bibliomania.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Harry Potter Trivia",
    github: "https://github.com/DallasSybrowsky/JS-Quiz",
    demo: "https://dallassybrowsky.github.io/JS-Quiz/"
  },
  {
    id: 3,
    image: IMG3,
    title: "J.A.T.E.",
    github: "https://github.com/DallasSybrowsky/Bibliomania",
    demo: "https://dsybrowsky-jate-text-editor.herokuapp.com/"
  },
  {
    id: 4,
    image: IMG4,
    title: "FidoFind",
    github: "https://github.com/DallasSybrowsky/FidoFind",
    demo: "https://dallassybrowsky.github.io/FidoFind/index.html"
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather Dashboard",
    github: "https://github.com/DallasSybrowsky/Weather-app",
    demo: "https://dallassybrowsky.github.io/Weather-app"
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">{title} GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Deployed App</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
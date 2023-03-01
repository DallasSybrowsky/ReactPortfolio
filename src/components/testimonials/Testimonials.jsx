import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avtr1.jpg";
import AVTR2 from "../../assets/avtr2.jpg";
import AVTR3 from "../../assets/avtr3.jpg";
import AVTR4 from "../../assets/avtr4.jpg";

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Avatar One",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio maxime officia minus repellat nulla, quo commodi aliquam eum! Ducimus laudantium provident odio assumenda nesciunt veniam ea ullam sint blanditiis?"
  },
  {
    id: 2,
    image: AVTR2,
    name: "Avatar Two",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio maxime officia minus repellat nulla, quo commodi aliquam eum! Ducimus laudantium provident odio assumenda nesciunt veniam ea ullam sint blanditiis?"
  },
  {
    id: 3,
    image: AVTR3,
    name: "Avatar Three",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio maxime officia minus repellat nulla, quo commodi aliquam eum! Ducimus laudantium provident odio assumenda nesciunt veniam ea ullam sint blanditiis?"
  },
  {
    id: 4,
    image: AVTR4,
    name: "Avatar Four",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio maxime officia minus repellat nulla, quo commodi aliquam eum! Ducimus laudantium provident odio assumenda nesciunt veniam ea ullam sint blanditiis?"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews of my work</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
        data.map(({id, image, name, review}) => {
          return (
            <article key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
                <h5 key={name} className="client__name">{name}</h5>
                <small key={review} className="client__review">
                  {review}
                </small>
            </article>
          )
        })
        }
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import './Testimonials.scss';
import PropTypes from 'prop-types';

export const Testimonials = ({ main, testimonials }) => {

  return (
    <article className="team__testimonials testimonials">
      <h3 className="testimonials__name">
        {testimonials.find(person => person.id === main).name}
      </h3>
      <h5 className="testimonials__position">
        {testimonials.find(person => person.id === main).title}
      </h5>
      <p className="testimonials__quote">
        {testimonials.find(person => person.id === main).quote}
      </p>
      <ul className="testimonials__contacts">
        <li>
          <span></span>
          <a href="https://www.facebook.com/" className="testimonials__link">Facebook</a>
        </li>
        <li>
        <span></span>
          <a href="https://www.linkedin.com/" className="testimonials__link">Linkedin</a>
        </li>
        <li>
        <span></span>
          <a href="https://www.twitter.com/" className="testimonials__link">Twitter</a>
        </li>
      </ul>
    </article>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.object.isRequired
    ).isRequired,
  main: PropTypes.number.isRequired
};
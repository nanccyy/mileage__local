import React from 'react';
import classNames from 'classnames';
import './Gallery.scss';
import PropTypes from 'prop-types';

export const Gallery = ({ testimonials, main, shadow1, shadow2 }) => {
  return (
    <div className="team__gallery gallery">
      {testimonials.map(person =>
        <img
          key={person.name}
          className={classNames({
            gallery__image: true,
            gallery__image_main: main === person.id,
            gallery__image_shadow1: shadow1 === person.id,
            gallery__image_shadow2: shadow2 === person.id,
          })}
          src={person.image}
          alt={person.name}
        >
        </img>
      )}
    </div>
  );
};

Gallery.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.object.isRequired
    ).isRequired,
  main: PropTypes.number.isRequired,
  shadow1: PropTypes.number.isRequired,
  shadow2: PropTypes.number.isRequired
}


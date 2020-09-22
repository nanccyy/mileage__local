import React, { useState } from 'react';
import './Team.scss';
import { Gallery } from './Gallery/Gallery';
import testimonials from '../../api/testimonials';
import { Testimonials } from './Testimonials/Testimonials';

const lastIndex = testimonials.length;

export const Team = () => {
  const [main, setMain] = useState(1);
  const [shadow1, setShadow1] = useState(2);
  const [shadow2, setShadow2] = useState(3);

  const setImage = (button) => {
    if (button === 'next') {
      if (main === testimonials.length) {
        return;
      } else {
        setMain(main + 1);
        setShadow1(main + 2);
        setShadow2(main + 3);
      }
    }

    if (button === 'prev') {
      if (main === 1) {
        return;
      } else {
        setMain(main - 1);
        setShadow1(main);
        setShadow2(main + 1);
      }
    }
  }

  return (
    <>
      <section className="team team_container" id="team">
        <div className="team__info">
          <Testimonials
            testimonials={testimonials}
            main={main} />
          <div className="team__slider">
            {main < lastIndex &&
              <img className="team__miniature team__miniature_left"
                src={testimonials.find(person => person.id === shadow1).image}
                alt="person_photo"
              >
              </img>
            }
            <div className="team__slider-inner-part">
              <div className="team__buttons">
                <button
                  name="next"
                  className="team__button team__button_next"
                  onClick={(event) => {
                    setImage(event.target.name)
                  }}
                  disabled={main === lastIndex}
                >
                  Next
                </button>
                <button
                  name="prev"
                  className="team__button team__button_prev"
                  onClick={(event) => { setImage(event.target.name) }}
                  disabled={main === 1}
                >
                  Prev
                </button>
              </div>

              <div className="team__names">
                <p className="team__name">
                  {main < lastIndex &&
                    testimonials.find(person => person.id === shadow1).name
                  }
                </p>
                <p className="team__name">
                  {main > 1 &&
                    testimonials.find(person => person.id === (main - 1)).name
                  }
                </p>
              </div>
            </div>
            {main > 1 &&
              <img
                className="team__miniature team__miniature_right"
                src={testimonials.find(person => person.id === (main - 1)).image}
                alt="person_photo"
              >
              </img>
            }
          </div>
        </div>
        <div>
          <Gallery
            testimonials={testimonials}
            main={main}
            shadow1={shadow1}
            shadow2={shadow2}
          />
        </div>

      </section>
    </>
  );
};
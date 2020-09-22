import React, { useEffect, useRef } from 'react';
import Heading from './Heading/Heading';
import './Slider.scss';
import classNames from 'classnames';
import { gsap, MotionPathPlugin, TimelineLite, Power3 } from "gsap/all";
import { TweenMax } from 'gsap/all';
import PropTypes from 'prop-types';

gsap.registerPlugin(MotionPathPlugin);

export const Slider = ({
  changeLink,
  activePointIndex,
  setActivePointIndex,
}) => {
  let app = useRef(null);
  let heading = useRef(null);
  let points = useRef(null);
  const tl = new TimelineLite()

  useEffect(() => {
    if (heading) {
      TweenMax.to(app, 0, {});
      tl.from(heading, 1.2, { y: -100, ease: Power3.easeOut })
        .from(heading, 2, { scale: 0.6, ease: Power3.easeOut }, 0.5)
        .from(points, 1.2, { y: -100, ease: Power3.easeOut }, 0.5)
        .from(points, 2, { scale: 0.6, ease: Power3.easeOut }, 0.5);
    }
  }, []);

  const changeVideoWithPointButtons = (number) => {
    setActivePointIndex(+number);
  }

  return (
    <>
      <section className="slider" ref={el => app = el}>
        <button
          type="button"
          className="slider__button slider__button--left"
          name="left"
          onClick={(event) => { changeLink(event) }}
        >
        </button>
        <div ref={el => heading = el}>
          <Heading />
        </div>
        <button
          type="button"
          className="slider__button slider__button--right"
          name="right"
          onClick={(event) => { changeLink(event) }}
        >
        </button>
      </section>
      <div className="slider__points" ref={el => points = el}>
        <div
          className={classNames({
            slider__point: true,
            slider__point_active: activePointIndex === 1
          })}>
          <button
            name="1"
            className={classNames({
              active: activePointIndex === 1
            })}
            onClick={(event) => {
              changeVideoWithPointButtons(event.target.name)
            }}
          >
          </button>
        </div>
        <div
          className={classNames({
            slider__point: true,
            slider__point_active: activePointIndex === 2
          })}

        >
          <button
            name="2"
            className={classNames({
              active: activePointIndex === 2
            })}
            onClick={(event) => {
              changeVideoWithPointButtons(event.target.name)
            }}
          >
          </button>
        </div>
        <div
          className={classNames({
            slider__point: true,
            slider__point_active: activePointIndex === 3
          })}
        >
          <button
            name="3"
            className={classNames({
              active: activePointIndex === 3
            })}
            onClick={(event) => {
              changeVideoWithPointButtons(event.target.name)
            }}
          >
          </button>
        </div>
      </div>
    </>
  )
};

Slider.propTypes = {
  activePointIndex: PropTypes.number.isRequired,
  changeLink: PropTypes.func.isRequired,
  setActivePointIndex: PropTypes.func.isRequired,
}

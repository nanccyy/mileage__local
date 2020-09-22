import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useIntersection } from 'react-use';
import './Banner.scss';
import { Slider } from '../Slider/Slider';
import { gsap, ScrollTrigger } from "gsap/all";
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const videoList = [{
  id: 1,
  name: "video1.mp4",
},
{
  id: 2,
  name: "video2.mp4",
},
{
  id: 2,
  name: "video2.mp4",
}]

const Banner = ({ setIsBanner }) => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "100px",
    threshold: 0.15,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting === true) {
      setIsBanner(true);
    } else {
      setIsBanner(false)
    }
  }, [intersection])

  const changeLink = (event) => {
    const buttonName = event.target.name;
    if (buttonName === 'left') {
      if (currentVideo > 1) {
        setCurrentVideo(currentVideo - 1);
      } else {
        setCurrentVideo(videoList.length);
      }
    }

    if (buttonName === 'right') {
      if (currentVideo < videoList.length) {
        setCurrentVideo(currentVideo + 1);
      } else {
        setCurrentVideo(1);
      }
    }
  }

  return (
    <>
      <div className="banner" id="home" ref={sectionRef}>
        <div className="banner__innerWrapper" >

          <video
            autoPlay
            loop
            muted
            preload="auto"
            className={classNames({
              banner__video: true,
              banner__video_active: currentVideo === 1
            })}>
            <source
              src={require(`../../videos/video1.mp4`)}
              type="video/mp4"
            >
            </source>
          </video>
          <video
            autoPlay
            loop
            muted
            preload="none"
            className={classNames({
              banner__video: true,
              banner__video_active: currentVideo === 2
            })}>
            <source
              src={require(`../../videos/video2.mp4`)}
              type="video/mp4"
            >
            </source>
          </video>
          <video
            autoPlay
            loop
            muted
            preload="none"
            className={classNames({
              banner__video: true,
              banner__video_active: currentVideo === 3
            })}
          >
            <source
              src={require(`../../videos/video3.mp4`)}
              type="video/mp4"
            >
            </source>
          </video>
        </div>
      </div>
      <Slider changeLink={changeLink} 
      activePointIndex={currentVideo}
      setActivePointIndex={setCurrentVideo} />
    </>
  );
};

export default Banner;

Banner.propTypes = {
  setIsBanner: PropTypes.func.isRequired
}

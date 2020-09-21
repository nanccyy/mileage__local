import React, { useRef, useEffect } from 'react';
import './Footer.scss';
import { useIntersection } from 'react-use';
import PropTypes from 'prop-types';

export const Footer = ({ setIsFooter }) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "100px",
    threshold: 1,
  });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.9) {
      setIsFooter(true);
    }
    if (intersection && !intersection.isIntersecting) {
      setIsFooter(false);
    }
  }, [intersection]);

  return (
    <footer className="footer" ref={sectionRef}>
      <div className="footer__logo logo">
        <div className="logo__image logo__image_footer">
        </div>
        <div className="logo__text logo__text_footer">Upqode</div>
      </div>
      <nav className="footer__nav">
        <ul className="footer__list"
        >
          <li className="footer__item footer__item_margin">
            <a href="#home"
              className="footer__link"
            >
              Home
            </a>
          </li>
          <li className="footer__item">
            <a href="#services"
              className="footer__link"
            >
              Services
           </a>
          </li>
          <li className="footer__item">
            <a href="#team"
              className="footer__link"
            >
              Team
            </a>
          </li>
          <li className="footer__item">
            <a href="#contactUS"
              className="footer__link"
            >
              Contact Us
           </a>
          </li>
        </ul>
      </nav>
      <p className="footer__text">© UpQode 2019. All Right Reserved.</p>
    </footer>
  )
}

Footer.propTypes = {
  setIsFooter: PropTypes.func.isRequired
}
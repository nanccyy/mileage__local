import React from 'react';
import './Navbar.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Navbar({ isDarkFont, open, setOpen }) {

  return (
    <>
      <nav className="header__nav nav">
        <ul className={classNames({
          nav__list: true,
          nav__list_header: true,
          nav__list_burger: open,
        })}
        >
          <li className="nav__item nav__item_header">
            <a href="#home"
              className={classNames({
                nav__link: true,
                nav__link_header: true,
                nav__link_isActive: true,
                nav__link_burger: open,
                nav__link_dark: isDarkFont && !open
              })}
              onClick={()=> {setOpen(false)}}
            >
              Home
            </a>
          </li>
          <li className="nav__item nav__item_header">
            <a href="#services"
              className={classNames({
                nav__link: true,
                nav__link_header: true,
                nav__link_burger: open,
                nav__link_dark: isDarkFont && !open
              })}
              onClick={()=> {setOpen(false)}}
            >
              Services
            </a>
          </li>
          <li className="nav__item nav__item_header">
            <a href="#team"
              className={classNames({
                nav__link: true,
                nav__link_header: true,
                nav__link_burger: open,
                nav__link_dark: isDarkFont && !open
              })}
              onClick={()=> {setOpen(false)}}
            >
              Team
            </a>
          </li>
          <li className="nav__item nav__item_header">
            <a href="#contactUS"
              className={classNames({
                nav__link: true,
                nav__link_header: true,
                nav__link_burger: open,
                nav__link_dark: isDarkFont && !open
              })}
              onClick={()=> {setOpen(false)}}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="burger" open={open} onClick={() => {
        setOpen(!open);
      }}
      >
        <div className={classNames({
          burger__item: true,
          burger__item_dark: isDarkFont,
          burger__item_first: open,
        })}
        />
        <div className={classNames({
          burger__item: true,
          burger__item_dark: isDarkFont,
          burger__item_second: open,
        })}
        />
        <div className={classNames({
          burger__item: true,
          burger__item_dark: isDarkFont,
          burger__item_third: open,
        })}
        />
      </div>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  isDarkFont: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

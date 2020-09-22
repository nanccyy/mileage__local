import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const nav = ["home", 'services', "team", "contact us"];

function Navbar({ isDarkFont, open, setOpen, isBanner }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
     if (!isBanner) {
      setActive(-1);
     } if (isBanner) {
       setActive(0);
     }
  }, [isBanner]);
  
  return (
    <>
      <nav className="header__nav nav">
        <ul className={classNames({
          nav__list: true,
          nav__list_header: true,
          nav__list_burger: open,
        })}
        >
          {nav.map((el, index) => {
            return (
              <li className="nav__item nav__item_header">
                <a href={`#${el}`}
                  className={classNames({
                    nav__link: true,
                    nav__link_header: true,
                    nav__link_isActive: active === index,
                    nav__link_burger: open,
                    nav__link_dark: isDarkFont && !open
                  })}
                  onClick={() => { setOpen(false); setActive(index) }}
                >
                  {el}
                </a>
              </li>
            );
          })}

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
  setOpen: PropTypes.func.isRequired,
  isBanner: PropTypes.bool.isRequired
}

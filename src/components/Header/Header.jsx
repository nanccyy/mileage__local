import React, { useEffect, useState } from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Header = ({ isBanner, isSmallScreen, scrolled }) => {
  const [isDarkFont, setFontDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFontDark(!isBanner)
  }, [isBanner]);

  return (
    <>
      <header
        className={classNames({
          header: true,
          header_dark_bg: (isBanner && scrolled)
            || (isBanner && isSmallScreen),
          header_white_bg: isBanner === false && !open,
        })}
      >
        <section className="header__section">
          <Logo isDarkFont={isDarkFont} open={open}/>
          <Navbar
            isDarkFont={isDarkFont}
            open={open}
            setOpen={setOpen}
            isBanner={isBanner}
          />
        </section>
      </header>
    </>
  )
}

export default Header;

Header.propTypes = {
  isBanner: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  scrolled: PropTypes.bool.isRequired,
}
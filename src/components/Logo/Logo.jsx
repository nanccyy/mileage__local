import React from 'react';
import './Logo.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Logo = ({ isDarkFont, open }) => {
  return (
    <div className="header__logo logo">
      <div className={classnames({
        logo__image: true,
        logo__image_header: true,
        logo__image_dark: isDarkFont && !open
      })}
      >
      </div>

      <div className={classnames({
        logo__text: true,
        logo__text_header: true,
        logo__text_dark: isDarkFont && !open
      })}
      >
        Upqode
      </div>
    </div>
  )
}

export default Logo;

Logo.propTypes = {
  isDarkFont: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired
}


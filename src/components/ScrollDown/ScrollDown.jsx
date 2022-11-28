import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import ReactScroll from 'react-scroll';
import s from './ScrollDown.module.scss';
import ScrollDownIcon from '../../static/svg/scroll-down.svg';

const ScrollDown = ({ to }) => {
  const { formatMessage } = useIntl();

  const handleClick = () => {
    const elements = to.map((item) => document.querySelector(item)).filter((item) => Boolean(item));

    if (elements[0]) {
      ReactScroll.animateScroll.scrollTo(elements[0].offsetTop, {
        duration: 400,
        smooth: true,
      });
    }
  };

  return (
    <div className={s.wrapper}>
      <button type="button" onClick={handleClick}>
        <ScrollDownIcon />
        {formatMessage({ defaultMessage: 'Scroll down', id: 'scroll_down' })}
      </button>
    </div>
  );
};

export default ScrollDown;

ScrollDown.propTypes = {
  to: PropTypes.string.isRequired,
};

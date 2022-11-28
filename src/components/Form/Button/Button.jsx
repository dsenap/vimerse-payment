import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const Button = ({ children, disableRipper, ...rest }) => (
  <MaterialButton
    disableRipple={disableRipper}
    // disabled={disabled}
    type="button"
    // variant={variant}
    // color={color}
    // size={size}
    {...rest}
  >
    {children}
  </MaterialButton>
);

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;

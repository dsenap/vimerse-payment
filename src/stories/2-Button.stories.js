import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import theme from '../theme/theme';
import Button from '../components/Form/Button/Button';
import ButtonSvg from '../static/svg/buttonSvg.svg';
import colors from '../theme/colors';

const useStyles = makeStyles(() => ({
  root: {
    '&.MuiButton-startIcon': {
      top: '0',
      position: 'relative',
      right: '0',
    },
  },
}));
const svg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="11.5" r="8.5" fill="white" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
      fill="#FE7A39"
    />
  </svg>
);

const svg2 = (
  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M8 7.16212L9.21337 6L16 12.5L9.21337 19L8 17.8379L13.5733 12.5L8 7.16212Z" fill="#176EA5" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="24" fill="white" transform="matrix(-1 0 0 1 16 0)" />
      </clipPath>
    </defs>
  </svg>
);

const svg3 = (
  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M8 7.16212L6.78663 6L0 12.5L6.78663 19L8 17.8379L2.42674 12.5L8 7.16212Z" fill="#176EA5" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const sizeOptions = {
  medium: 'medium',
  large: 'large',
};

export const PrimaryButton = () => (
  <MuiThemeProvider theme={theme}>
    <Button
      disabled={boolean('Disabled', false)}
      color="primary"
      variant="contained"
      size={select('Size', sizeOptions, 'medium')}
      style={{ padding: '7px 0' }}
    >
      {text('Button text', 'My button')}
    </Button>
  </MuiThemeProvider>
);

export const OutlinedButton = () => (
  <MuiThemeProvider theme={theme}>
    <Button
      disabled={boolean('Disabled', false)}
      color="primary"
      variant="outlined"
      size={select('Size', sizeOptions, 'medium')}
    >
      {text('Button text', 'My button')}
    </Button>
  </MuiThemeProvider>
);

export const OutlinedButtonSecondary = () => (
  <MuiThemeProvider theme={theme}>
    <Button disabled={boolean('Disabled', false)} color="secondary" variant="outlined" size="medium">
      {text('Button text', 'My button')}
    </Button>
  </MuiThemeProvider>
);

export const OutlinedButtonSecondarySmall = () => (
  <MuiThemeProvider theme={theme}>
    <Button disabled={boolean('Disabled', false)} color="secondary" variant="outlined" size="small">
      {text('Button text', 'My button')}
    </Button>
  </MuiThemeProvider>
);

export const OutlinedButtonSecondaryActive = () => (
  <MuiThemeProvider theme={theme}>
    <Button
      startIcon={svg}
      style={{ borderColor: colors.primary.main, backgroundColor: colors.primary.squareOutHover, border: '2px solid' }}
      disabled={boolean('Disabled', false)}
      color="secondary"
      variant="outlined"
      size="medium"
    >
      <b> {text('Button text', 'My button')}</b>
    </Button>
  </MuiThemeProvider>
);

export const OutlinedButtonSecondarySmallActive = () => (
  <MuiThemeProvider theme={theme}>
    <Button
      startIcon={svg}
      style={{
        borderColor: colors.primary.squareOutlined,
        backgroundColor: colors.primary.squareOutHover,
        border: '2px solid',
      }}
      disabled={boolean('Disabled', false)}
      color="secondary"
      variant="outlined"
      size="small"
    >
      <b>{text('Button text', 'My button')}</b>
    </Button>
  </MuiThemeProvider>
);

export const TextButton = () => (
  <MuiThemeProvider theme={theme}>
    <Button
      endIcon={svg2}
      disabled={boolean('Disabled', false)}
      color="primary"
      variant="text"
      size={select('Size', sizeOptions, 'medium')}
      style={{ padding: '12px 0' }}
    >
      {text('Button text', 'My button')}
    </Button>
  </MuiThemeProvider>
);

export const TextButtonBack = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Button
        startIcon={svg3}
        disabled={boolean('Disabled', false)}
        color="primary"
        variant="text"
        size={select('Size', sizeOptions, 'medium')}
        className="backBtn"
        style={{ padding: '12px 0' }}
      >
        {text('Button text', 'My button')}
      </Button>
    </MuiThemeProvider>
  );
};

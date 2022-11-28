import React from 'react';
import { MuiThemeProvider, Typography } from '@material-ui/core';
import { text, withKnobs } from '@storybook/addon-knobs';
import theme from '../theme/theme';

export default {
  title: 'Typography',
  component: Typography,
  decorators: [withKnobs],
};

export const Heading1 = () => {
  const label = text('Typography content', 'The five boxing wizards jump quickly');

  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h1">{label}</Typography>
    </MuiThemeProvider>
  );
};

export const Heading2 = () => {
  const label = text('Typography content', 'The five boxing wizards jump quickly');

  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h2">{label}</Typography>
    </MuiThemeProvider>
  );
};

export const Heading3 = () => {
  const label = text('Typography content', 'The five boxing wizards jump quickly');

  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h3">{label}</Typography>
      <Typography variant="h3">
        <b style={{ fontWeight: '500' }}>{label}</b>
      </Typography>
    </MuiThemeProvider>
  );
};

export const Heading4 = () => {
  const label = text('Typography content', 'The five boxing wizards jump quickly');

  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h4">{label}</Typography>
      <Typography variant="h4">
        <b style={{ fontWeight: '400' }}>{label}</b>
      </Typography>
    </MuiThemeProvider>
  );
};

export const Heading5 = () => {
  const label = text('Typography content', 'The five boxing wizards jump quickly');
  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h5">{label}</Typography>
    </MuiThemeProvider>
  );
};

export const Body1 = () => {
  const label = text(
    'Typography content',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  );

  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="body1">
        <b>{label}</b>
      </Typography>
      <Typography variant="body1">
        <i>{label}</i>
      </Typography>
    </MuiThemeProvider>
  );
};

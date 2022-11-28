import React from 'react';
import { CircularProgress, MuiThemeProvider } from '@material-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../theme/theme';

export default {
  title: 'Preloader',
  component: CircularProgress,
  decorators: [withKnobs],
};

export const Preload = () => (
  <MuiThemeProvider theme={theme}>
    <CircularProgress color="secondary" />
  </MuiThemeProvider>
);

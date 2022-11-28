import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Link as MaterialLink, MuiThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme/theme';

export default {
  title: 'Link',
  decorators: [withKnobs],
};

export const Link = () => (
  <MuiThemeProvider theme={theme}>
    <MaterialLink>
      <Typography variant="body1">Normal link</Typography>
    </MaterialLink>
  </MuiThemeProvider>
);

export const LinkUnderline = () => (
  <MuiThemeProvider theme={theme}>
    <MaterialLink>
      <Typography style={{ textDecoration: 'underline' }} variant="body1">
        Normal link
      </Typography>
    </MaterialLink>
  </MuiThemeProvider>
);

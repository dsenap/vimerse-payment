import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { IconButton, MuiThemeProvider } from '@material-ui/core';
import theme from '../theme/theme';

const svg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5673 7.34714C22.3253 6.42934 21.616 5.70584 20.7165 5.45871C19.0732 5 12.4998 5 12.4998 5C12.4998 5 5.92661 5 4.28329 5.44131C3.40107 5.68819 2.67445 6.42947 2.43246 7.34714C2 9.02348 2 12.5 2 12.5C2 12.5 2 15.994 2.43246 17.6529C2.67471 18.5705 3.38377 19.294 4.28342 19.5412C5.94392 20 12.5 20 12.5 20C12.5 20 19.0732 20 20.7165 19.5587C21.6161 19.3117 22.3253 18.5882 22.5676 17.6705C22.9999 15.994 22.9999 12.5177 22.9999 12.5177C22.9999 12.5177 23.0172 9.02348 22.5673 7.34714ZM10.4069 15.7117V9.28827L15.873 12.5L10.4069 15.7117Z"
      fill="#808083"
    />
  </svg>
);

export default {
  title: 'Icon',
  decorators: [withKnobs],
};

export const Icon = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <IconButton>{svg}</IconButton>
    </div>
  </MuiThemeProvider>
);

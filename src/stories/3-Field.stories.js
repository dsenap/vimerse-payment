import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import theme from '../theme/theme';
import Field from '../components/Form/Field/Field';

export default {
  title: 'Field',
  component: Field,
  decorators: [withKnobs],
};

export const FieldDefault = () => (
  <MuiThemeProvider theme={theme}>
    <Field name="email" error={boolean('Error', false)} isSvgInEnd={false} disabled={boolean('Disabled', false)} />
  </MuiThemeProvider>
);

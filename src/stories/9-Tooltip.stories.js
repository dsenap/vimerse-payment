import React from 'react';
import { Typography } from '@material-ui/core';
import { TooltipComponent } from '../components/TooltipComponent/TooltipComponent';

export default {
  title: 'Tooltip',
  component: TooltipComponent,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <Typography
    variant="body2"
    style={{ padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <TooltipComponent {...args} />
  </Typography>
);

export const DesktopTooltip = Template.bind({});
DesktopTooltip.args = {
  label: 'verylongtext',
};

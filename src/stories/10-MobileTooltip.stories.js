import React from 'react';
import { Typography } from '@material-ui/core';
import { TooltipComponentMobile } from '../components/TooltipComponent/TooltipComponentMobile';

export default {
  title: 'TooltipMobile',
  component: TooltipComponentMobile,
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
    <TooltipComponentMobile {...args} />
  </Typography>
);

export const MobileTooltip = Template.bind({});
MobileTooltip.args = {
  label: 'verylongtext',
};

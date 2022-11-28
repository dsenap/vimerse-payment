import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import { IconButton, Typography } from '@material-ui/core';
import s from './Tooltip.module.scss';

const svg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="white"
    />
  </svg>
);

const svg2 = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#176EA5"
    />
  </svg>
);

export const TooltipComponent = ({ label, blackSvg }) => (
  <Tooltip
    title={
      <span className={s.tooltipWrapper}>
        <Typography style={{ color: '#fff' }} variant="body2" className={s.tooltipDesktop}>
          <div
            dangerouslySetInnerHTML={{
              __html: label,
            }}
          />
        </Typography>
      </span>
    }
    placement="bottom-end"
    arrow
  >
    <IconButton disableRipple className={blackSvg ? s.iconClose : s.iconClose2}>
      {blackSvg ? svg2 : svg}
    </IconButton>
  </Tooltip>
);

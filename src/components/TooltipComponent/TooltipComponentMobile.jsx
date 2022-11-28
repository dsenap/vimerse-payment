import React, { useState } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { IconButton, Typography } from '@material-ui/core';
import Close from '../../static/svg/close.svg';
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

export const TooltipComponentMobile = ({ label, blackSvg }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        title={
          <span className={s.tooltipWrapper}>
            <Typography
              style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'flex-start' }}
              className={s.tooltip}
              variant="body2"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: label,
                }}
              />
              <IconButton style={{ paddingLeft: '10px' }} disableRipple onClick={handleTooltipClose}>
                <Close />
              </IconButton>
            </Typography>
          </span>
        }
        placement="bottom-end"
        arrow
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <IconButton disableRipple className={blackSvg ? s.iconClose : s.iconClose2} onClick={handleTooltipOpen}>
          {blackSvg ? svg2 : svg}
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
};

import React from 'react';
import s from 'src/components/Layout/Header/Header.module.scss';
import { Link as MaterialLink, Typography, Box, IconButton, ButtonBase } from '@material-ui/core';
import Button from 'src/components/Form/Button';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useAuth from 'src/hooks/useAuth';
import colors from '../../../theme/colors';

const useStyles = makeStyles(() => ({
  root: {
    color: colors.text.light,
    fontSize: '14px',
    lineHeight: '17px',
  },
  active: {
    color: `${colors.secondary.main} !important`,
    pointerEvents: 'none',
  },
}));

const AuthBlock = () => {
  const classes = useStyles();
  const router = useRouter();
  const { user, logout } = useAuth();
  const isHomePage = router.pathname === '/';

  const { formatMessage } = useIntl();

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    router.push(`/${target}`);
  };
  console.log(isHomePage);
  return (
    <div className={s.authBlock}>
      <div className={s.buttonWrapper2}>
        <Box display={'flex'}>
          <Box mr={2}>
            <Typography>{`${user.firstname} ${user.lastname}`}</Typography>
            <center>
              <ButtonBase onClick={() => router.push('/profile')} style={{ width: 80 }}>
                <Typography align="center" color="primary" variant={'caption'}>
                  Edit Profile
                </Typography>
              </ButtonBase>
            </center>
          </Box>
          <IconButton style={{ width: 40 }} onClick={() => logout()}>
            <ExitToAppIcon color="primary" style={{ fontSize: 36 }} />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default AuthBlock;

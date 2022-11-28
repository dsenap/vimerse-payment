import React from 'react';
import { Container, IconButton ,Box,Typography,ButtonBase } from '@material-ui/core';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';
import ReactScroll from 'react-scroll';
import { useIntl } from 'react-intl';
import s from './Header.module.scss';
import BurgerIcon from '../../../static/svg/burger-icon.svg';
import Button from '../../Form/Button';
import useAuth from 'src/hooks/useAuth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Logo = dynamic(() => import('../../Logo'));
const AuthBlock = dynamic(() => import('./AuthBlock'));

const Header = ({ setSideMenuOpen, to }) => {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const {accessToken ,user,logout}=useAuth()
  const isHomePage = router.pathname === '/';
  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    router.push(`/${target}`);
  };

  const handleClick = () => {
    const elements = to.map((item) => document.querySelector(item)).filter((item) => Boolean(item));

    if (elements[0]) {
      ReactScroll.animateScroll.scrollTo(elements[0].offsetTop, {
        duration: 2600,
        smooth: true,
      });
    }
  };
  return (
    <header className={s.wrapper}>
      <Container>
        <div className={s.container}>
          <div className={s.logoWrapper}>
            <Logo />
          </div>
          <div className={s.content}>
            <LazyLoad resize>
              <AuthBlock />
            </LazyLoad>
          </div>
          <div className={s.rightBlock}>
            {!accessToken&&<div className={s.buttonWrapper}>
              <Button
                variant="contained"
                size="medium"
                onClick={isHomePage ? handleClick : handleLinkClick('#start-creating')}
              >
                {formatMessage({ defaultMessage: 'Try now', id: 'header_button_if_width__less_768' })}
              </Button>
            </div>}
            {!accessToken?<IconButton
              disableRipple
              disableFocusRipple
              disableTouchRipple
              onClick={() => setSideMenuOpen(true)}
              className={s.burger}
              aria-label="menu"
            >
              <BurgerIcon />
            </IconButton>:<Box display={"flex"}>
       <Box mr={2}>
         <Typography>
           {user.firstname +" "+user.lastname}
         </Typography>
        <center> 
          <ButtonBase onClick={()=>router.push("/profile")} style={{width:80}}>
          <Typography align='center' color="primary" variant={"caption"}>
           Edit Profile
         </Typography></ButtonBase></center>
       </Box>
       <IconButton style={{width:40}} onClick={()=>logout()}>
<ExitToAppIcon color="primary" style={{fontSize:36}}/>
       </IconButton>
       </Box>
            }
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

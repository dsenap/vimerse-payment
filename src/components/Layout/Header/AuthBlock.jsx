import React from 'react';
import s from 'src/components/Layout/Header/Header.module.scss';
import { Link as MaterialLink, Typography ,IconButton ,ButtonBase,Box} from '@material-ui/core';
import Button from 'src/components/Form/Button';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import colors from '../../../theme/colors';
import useAuth from 'src/hooks/useAuth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

  const isHomePage = router.pathname === '/';

  const { formatMessage } = useIntl();

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    router.push(`/${target}`);
  };
const {user,accessToken ,logout}=useAuth()

console.log(accessToken,user)
  return (
    <div className={s.authBlock}>
      {isHomePage ? (
        <MaterialLink
          className={s.linkWrapper}
          component={Link}
          to="how-it-works"
          spy
          activeclass="active"
          smooth
          duration={700}
        >
          <Typography className={classes.root} variant="body1">
            {formatMessage({ defaultMessage: 'How It Works', id: 'header_how_it_work' })}
          </Typography>
        </MaterialLink>
      ) : (
        <MaterialLink className={s.linkWrapper} href="/#how-it-works" onClick={handleLinkClick('#how-it-works')}>
          <Typography className={classes.root} variant="body1">
            {formatMessage({ defaultMessage: 'How It Works', id: 'header_how_it_work' })}
          </Typography>
        </MaterialLink>
      )}
      {isHomePage ? (
        <MaterialLink
          className={s.linkWrapper}
          component={Link}
          to="pricing"
          spy
          activeclass="active"
          smooth
          duration={700}
        >
          <Typography className={classes.root} variant="body1">
            {formatMessage({ defaultMessage: 'Pricing', id: 'header_pricing' })}
          </Typography>
        </MaterialLink>
      ) : (
        <MaterialLink className={s.linkWrapper} href="/#pricing" onClick={handleLinkClick('#pricing')}>
          <Typography className={classes.root} variant="body1">
            {formatMessage({ defaultMessage: 'Pricing', id: 'header_pricing' })}
          </Typography>
        </MaterialLink>
      )}

      {/* portfolio */}
      <MaterialLink
        className={classNames(s.linkWrapper, { [classes.active]: router.pathname === '/portfolio' })}
        href="/portfolio"
        activeclass="active"
      >
        <Typography
          className={classNames(classes.root, { [classes.active]: router.pathname === '/portfolio' })}
          variant="body1"
        >
          {formatMessage({ defaultMessage: 'Portfolio', id: 'header_portfolio' })}
        </Typography>
      </MaterialLink>

      <MaterialLink
        className={classNames(s.linkWrapper, { [classes.active]: router.pathname === '/about-us' })}
        href="/about-us"
        activeclass="active"
      >
        <Typography
          className={classNames(classes.root, { [classes.active]: router.pathname === '/about-us' })}
          variant="body1"
        >
          {formatMessage({ defaultMessage: 'About Us', id: 'header_about_us' })}
        </Typography>
      </MaterialLink>

      <MaterialLink
        className={classNames(s.linkWrapper, { [classes.active]: router.pathname === '/bookcall' })}
        href="/bookcall"
        activeclass="active"
      >
        <Typography
          className={classNames(classes.root, { [classes.active]: router.pathname === '/bookcall' })}
          variant="body1"
        >
          {formatMessage({ defaultMessage: 'Book a Call', id: 'header_bookcall' })}
        </Typography>
      </MaterialLink>

      <div className={s.buttonWrapper2}>
    { accessToken ?<Box display={"flex"}>
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
       </Box>:
        <>
        <Button
          className={s.signinBtn}
          onClick={() => {
            router.push('/signin');
          }}
          size="medium"
          variant="outlined"
          color="primary"
        >
          {formatMessage({ defaultMessage: 'Start creating', id: 'header_signin' })}
        </Button>

        <Button
          className={s.signupBtn}
          onClick={
            ()=>router.push("/signup")
            // isHomePage
            //   ? () => document.getElementById('start-creating')?.scrollIntoView({ behavior: 'smooth' })
            //   : handleLinkClick('#start-creating')
          }
          size="medium"
          variant="contained"
          color="primary"
        >
          {formatMessage({ defaultMessage: 'Start creating', id: 'header_signup' })}
        </Button>
        </>}
      </div>
    </div>
  );
};

export default AuthBlock;

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowForwardIos } from '@material-ui/icons';
import styles from './StartCreating.module.scss';
import Button from '../../Form/Button';

const StartCreating = () => {
  const [_email, setEmail] = useState('Email Address');
  const [emailRequired, setEmailRequired] = useState(false);

  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    const isValid = _email
      .toString()
      .toLowerCase()
      .match(/\S+@\S+\.\S+/);
    if (isValid) {
      router.push({
        pathname: '/signup',
        query: { email: _email },
      });
    } else {
      setEmailRequired(true);
    }
  };

  return (
    <div className={styles.contanier}>
      <img src="/images/portfolio/Group397.svg" alt="Banner image" className={styles.portfolioBannerImage} />

      <div className={styles.bannertextDiv}>
        <span className={styles.bannerText}>
          Sign up to get the first video editing service for free.
          <br />
          Get your video edited exactly as you would like.
        </span>
      </div>

      <form onSubmit={(e) => handleSignup(e)} autoComplete="off" style={{ zIndex: 100 }}>
        <div>
          <input
            type="text"
            value={_email}
            className={styles.getStartedTextFld}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailRequired) setEmailRequired(false);
            }}
            onFocus={() => {
              if (_email == 'Email Address') setEmail('');
              if (emailRequired) setEmailRequired(false);
            }}
            style={{ border: emailRequired ? '1px solid red' : 'none' }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            onClick={(e) => handleSignup(e)}
            className={styles.getStartedBtn}
          >
            Get Started
            <ArrowForwardIos className={styles.getStartedBtnArrow} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StartCreating;

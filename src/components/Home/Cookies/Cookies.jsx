import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import cn from 'classnames';
import { useIntl } from 'react-intl';
import s from './Cookies.module.scss';
import CookiesImage from '../../../../public/images/cookies.svg';
import Button from '../../Form/Button';

const Cookies = () => {
  const [showCookiesPolicy, setShowCookiesPolicy] = useState(false);

  const { formatMessage } = useIntl();

  const handleHideCookies = () => {
    setShowCookiesPolicy(false);
    localStorage.setItem('cookies', '0');
  };
  useEffect(() => {
    const cookies = localStorage.getItem('cookies');
    if (!cookies) {
      setShowCookiesPolicy(true);
    }
  }, []);
  return (
    <Container>
      <div
        className={cn(s.wrapper, {
          [s.active]: showCookiesPolicy,
        })}
      >
        <div
          className={cn(s.cookiePolicy, {
            [s.active]: showCookiesPolicy,
          })}
        >
          <div className={s.textWrapper}>
            <div>
              <CookiesImage />
            </div>
            <div className={s.textContent}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: 'We use cookies to ensure that we give you the best experience on our website.',
                  id: 'cookies_text_banner',
                })}
              </Typography>
            </div>
          </div>

          <div className={s.buttonWrapper}>
            <Button variant="outlined" className="cookiesBtn" size="medium" onClick={handleHideCookies}>
              {formatMessage({ defaultMessage: ' Okay', id: 'cookies_text_button' })}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cookies;

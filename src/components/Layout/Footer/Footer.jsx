import React from 'react';
import s from 'src/components/Layout/Footer/Footer.module.scss';
import { Container, IconButton, Typography, Link as MaterialLink, Divider } from '@material-ui/core';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { Icon } from '../../Logo/Logo';
import { firstBlockLinks, secondBlockLinks, socialNetworkLinks, technologiesLinks } from './FooterData';

const Footer = () => {
  const { formatMessage } = useIntl();
  const router = useRouter();

  const isHomePage = router.pathname === '/';

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    router.push(`/${target}`);
  };
  return (
    <footer className={s.wrapper}>
      <Container>
        <div className={s.container}>
          <div className={s.footerFirst}>
            <div className={s.firstBlock}>
              <div className={s.logoWrapper}>
                <Icon />
              </div>

              <div className={s.infoFirstBlock}>
                <div className={s.infoNew}>
                  <MaterialLink href="mailto: info@vimerse.com">
                    <Typography variant="body1">
                      {formatMessage({
                        defaultMessage: 'info@vimerse.com',
                        id: 'footer_info_mail_address',
                      })}
                    </Typography>
                  </MaterialLink>
                  <Typography className={s.infoItem} variant="body1">
                    {formatMessage({
                      defaultMessage: 'Boston, United States',
                      id: 'footer_address_string',
                    })}
                  </Typography>
                </div>
              </div>

              <div className={s.contentFirstBlock}>
                <menu className={s.navigation}>
                  {firstBlockLinks.map((item) => (
                    <li>
                      {isHomePage ? (
                        <Link rel="nofollow" href={item.href} passHref>
                          <MaterialLink>
                            <Typography variant="body1">{formatMessage(item.text)}</Typography>
                          </MaterialLink>
                        </Link>
                      ) : (
                        <MaterialLink rel="nofollow" href={item.href} onClick={handleLinkClick(item.target)}>
                          <Typography variant="body1">{formatMessage(item.text)}</Typography>
                        </MaterialLink>
                      )}
                    </li>
                  ))}
                </menu>
              </div>
            </div>

            <div className={s.wrapperSecondBlock}>
              <div className={s.helpfulLinks}>
                <Typography variant="body1">
                  <b>
                    {formatMessage({
                      defaultMessage: 'Helpful links',
                      id: 'footer_helpful_links_title',
                    })}
                  </b>
                </Typography>
                <div>
                  <menu className={s.navigation}>
                    {secondBlockLinks.map((item) => (
                      <li>
                        <Link rel="nofollow" href={item.href} passHref>
                          <MaterialLink rel="nofollow">
                            <Typography variant="body1">{formatMessage(item.text)}</Typography>
                          </MaterialLink>
                        </Link>
                      </li>
                    ))}
                  </menu>
                </div>
              </div>

              <div className={s.socialNetwork}>
                <Typography variant="body1">
                  <b>
                    {formatMessage({
                      defaultMessage: 'Social network',
                      id: 'footer_social_network_title',
                    })}
                  </b>
                </Typography>
                <div>
                  <menu className={s.navigation}>
                    {socialNetworkLinks.map((item) => (
                      <li>
                        <div className={s.burgerLinkContainer}>
                          <Link rel="nofollow" scroll={false} href={item.href}>
                            <a rel="nofollow" target="_blank" className={s.burgerLink}>
                              <div className={s.burgerLinkSvgContainerTop}>{item.socialImage}</div>
                              <span className={s.burgerLinkText}>{formatMessage(item.socialText)}</span>
                            </a>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </menu>
                </div>
              </div>

              <div className={s.technologies}>
                <Typography variant="body1">
                  <b>
                    {formatMessage({
                      defaultMessage: 'Technologies',
                      id: 'footer_technologies_title',
                    })}
                  </b>
                </Typography>
                <div>
                  <menu className={s.navigationLink}>
                    {technologiesLinks.map((item) => (
                      <li>
                        <IconButton
                          disableRipple
                          disableFocusRipple
                          disableTouchRipple
                          rel="nofollow"
                          target="_blank"
                          href={item.href}
                        >
                          {item.technologiesImage}
                        </IconButton>
                      </li>
                    ))}
                  </menu>
                </div>
              </div>
            </div>
          </div>

          <Divider variant="fullWidth" />

          <div className={s.footerBottom}>
            <div className={s.footerCopyright}>
              <Typography variant="subtitle1">
                {formatMessage({
                  defaultMessage: '2021 © Vimerse LLC',
                  id: 'footer_copyright',
                })}
              </Typography>
            </div>
            <div className={s.info}>
              <MaterialLink rel="nofollow" href="mailto: info@vimerse.com">
                <Typography variant="body1">
                  {formatMessage({
                    defaultMessage: 'info@vimerse.com',
                    id: 'footer_info_mail_address',
                  })}
                </Typography>
              </MaterialLink>
              <Typography className={s.infoItem} variant="body1">
                {formatMessage({
                  defaultMessage: ' Boston, United States',
                  id: 'footer_info_address',
                })}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { useCallback, useState } from 'react';
import { Divider, List, SwipeableDrawer, Link as MaterialLink } from '@material-ui/core';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useIntl } from 'react-intl';
import styles from './SideMenu.module.scss';
import Logo from '../../Logo';
import { sideMenuDataContainer, sideMenuDataLinks, sideMenuSocialNetworkLinks } from './SideMenuData';
import BookaCall from '../../../static/svg/mobile-menu-icon/bookcall.svg';

const SideMenu = ({ setSideMenuOpen }) => {
  const [state, setState] = useState({
    left: true,
  });

  const router = useRouter();
  const { formatMessage } = useIntl();

  const isHomePage = router.pathname === '/';

  const toggleDrawer = (anchor, open) => (event) => {
    if (!event && open === false) {
      setSideMenuOpen(false);
      return;
    }

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSideMenuOpen(false);
    setState({ ...state, [anchor]: open });
  };

  const handleLinkClick = (target) => (e) => {
    e.preventDefault();

    router.push(`/${target}`);
  };

  const handleCloseMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, [setSideMenuOpen]);

  const list = (anchor) => (
    <div role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <div className={styles.burgerLinkContainer}>
          <MaterialLink href="/bookcall" onClick={handleLinkClick('bookcall')}>
            <a className={styles.burgerLink}>
              <div className={styles.burgerLinkSvgContainerTop}>
                <BookaCall />
              </div>
              <span className={styles.burgerLinkText}>Book a Call</span>
            </a>
          </MaterialLink>
        </div>
        {sideMenuDataLinks.map((item) => (
          <div className={styles.burgerLinkContainer}>
            {isHomePage ? (
              <MaterialLink
                component={LinkScroll}
                to={item.to}
                spy
                className={styles.burgerLink}
                activeClass={classNames(styles.burgerLink, styles.selected)}
                smooth
                duration={item.duration}
                onClick={handleCloseMenu}
              >
                <div className={styles.burgerLinkSvgContainerTop}>{item.listLinkImage}</div>
                <span className={styles.burgerLinkText}>{formatMessage(item.textLink)}</span>
              </MaterialLink>
            ) : (
              <MaterialLink href="/" onClick={handleLinkClick(item.target)}>
                <a className={styles.burgerLink}>
                  <div className={styles.burgerLinkSvgContainerTop}>{item.listLinkImage}</div>
                  <span className={styles.burgerLinkText}>{formatMessage(item.textLink)}</span>
                </a>
              </MaterialLink>
            )}
          </div>
        ))}
        {sideMenuDataContainer.map((item) => (
          <div className={styles.burgerLinkContainer}>
            <Link scroll={false} href={item.href}>
              <a
                className={
                  router.pathname === item.pathname ? classNames(styles.burgerLink, styles.selected) : styles.burgerLink
                }
              >
                <div className={styles.burgerLinkSvgContainerTop}>{item.listImage}</div>
                <span className={styles.burgerLinkText}>{formatMessage(item.text)}</span>
              </a>
            </Link>
          </div>
        ))}
      </List>

      <Divider />

      <div className={styles.burgerSubmenuTitle}>
        {' '}
        {formatMessage({
          defaultMessage: 'Social network',
          id: 'side_menu_social_network_string',
        })}
      </div>
      <List className={styles.listWrapper}>
        {sideMenuSocialNetworkLinks.map((item) => (
          <div className={styles.burgerLinkContainer}>
            <Link scroll={false} href={item.href}>
              <a target="_blank" className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainerTop}>{item.listSocialLinkImage}</div>
                <span className={styles.burgerLinkText}>{formatMessage(item.textSocialLink)}</span>
              </a>
            </Link>
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer('left', true)}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </SwipeableDrawer>
    </div>
  );
};

export default SideMenu;

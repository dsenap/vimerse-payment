import React, { useState } from 'react';
import Header from 'src/components/DashboardLayout/Header';
import s from 'src/components/DashboardLayout/Layout.module.scss';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import useAuth from 'src/hooks/useAuth';
const Footer = dynamic(() => import('./Footer'));
const SideMenu = dynamic(() => import('./SideMenu/SideMenu'));
const Cookies = dynamic(() => import('../Home/Cookies/Cookies'));
const SnackBarBox = dynamic(() => import('../SnackBar/SnackBar'));

const Layout = ({ children, isGps }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
const {user,accessToken}=useAuth()
  return (
    <div className={s.wrapper}>
      <Header to={['#start-creating']} setSideMenuOpen={setSideMenuOpen} />
      <main>{children}</main>
      <LazyLoad once height={200} offset={200} placeholder={<div className={s.footerPlaceholder} />}>
        {!isGps &&!accessToken&& <Footer />}
      </LazyLoad>
      {sideMenuOpen && !isGps && <SideMenu setSideMenuOpen={setSideMenuOpen} />}
      <Cookies />
      <SnackBarBox />
    </div>
  );
};

export default Layout;

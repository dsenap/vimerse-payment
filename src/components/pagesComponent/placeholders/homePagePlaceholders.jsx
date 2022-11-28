import React from 'react';
import styles from '../../../styles/Home.module.scss';

export const HowItWorksPlaceholder = () => (
  <div className={styles.wrapper} id="how-it-works">
    <div className={styles.howItWorkPlaceholder} />
  </div>
);

export const BenefitsPlaceholder = () => (
  <div>
    <div className={styles.benefitsPlaceholder} />
  </div>
);

export const PricingPlaceholder = () => (
  <div id="pricing">
    <div className={styles.pricingPlaceholder} />
  </div>
);

export const PortfolioPlaceholder = () => (
  <div id="portfolio">
    <div className={styles.portfolioPlaceholder} />
  </div>
);

export const WhatWeDoPlaceholder = () => (
  <div id="what-we-do">
    <div className={styles.whatWeDoPlaceholder} />
  </div>
);

export const StartCreatingPlaceholder = () => (
  <div id="start-creating">
    <div className={styles.startCreatingPlaceholder} />
  </div>
);

export const ReviewsPlaceholder = () => (
  <div itemType="https://schema.org/Review">
    <div itemType="https://schema.org/Review" className={styles.reviewsPlaceholder} />
  </div>
);

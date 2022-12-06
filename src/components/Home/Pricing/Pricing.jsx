import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import styles from './Pricing.module.scss';
import Button from '../../Form/Button';
import { TooltipComponentMobile } from '../../TooltipComponent/TooltipComponentMobile';
import { TooltipComponent } from '../../TooltipComponent/TooltipComponent';
import {
  firstCardUl,
  pricingFirstCardLiData,
  pricingSecondCardLiData,
  pricingThirdCardLiData,
  secondCardUl,
  thirdCardUl,
} from './PricingData';

const Pricing = ({ setActiveIndex }) => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const { formatMessage } = useIntl();

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', resizeListener);

    resizeListener();

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const handleClick = (typePackage) => {
    // document.getElementById('start-creating').scrollIntoView({ behavior: 'smooth' });
    if (typePackage === 'Consultation') {
      router.push('/bookcall');
    }
    if (typePackage === 'Gold') {
      router.push('/signup');
    }
    if (typePackage === 'Diamond') {
      router.push('/signup');
    }
  };

  return (
    <div itemType="https://schema.org/Article" className={styles.wrapper} id="pricing">
      <Container>
        <div className={styles.titleWrapper}>
          <Typography variant="h2" component="p">
            {formatMessage({
              defaultMessage: 'Pricing',
              id: 'pricing_title',
            })}
          </Typography>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card1}>
            <div className={styles.cardTitleWrapper1}>
              <Typography variant="h4" className={styles.cardTitle1}>
                {formatMessage({
                  defaultMessage: 'VIDEO CALL',
                  id: 'pricing_card_1_title',
                })}
              </Typography>
            </div>
            <div className={styles.pricingBack1}>
              <div className={styles.pricingBackText1}>
                <Typography variant="h2">
                  {formatMessage({
                    defaultMessage: 'Free',
                    id: 'pricing_card_1_free',
                  })}
                </Typography>
              </div>
            </div>
            <ul className={styles.ulWrapper1}>
              {firstCardUl.map((item) => (
                <li>
                  <Typography variant="body1" className={styles.cardText1}>
                    {formatMessage(pricingFirstCardLiData[item.text])}
                  </Typography>
                </li>
              ))}
            </ul>
            <div className={styles.buttonWrapper1}>
              <Button variant="contained" size="large" onClick={() => handleClick('Consultation')}>
                {formatMessage({
                  defaultMessage: 'Try now',
                  id: 'pricing_card_1_button',
                })}
              </Button>
            </div>
          </div>

          <div className={styles.card2}>
            <div className={styles.cardTitleWrapper2}>
              <Typography variant="h4" className={styles.cardTitle2}>
                {formatMessage({
                  defaultMessage: 'ONE TRIAL',
                  id: 'pricing_card_2_title',
                })}
              </Typography>
            </div>
            <div className={styles.pricingBack2}>
              <Typography variant="h2">
                {formatMessage({
                  defaultMessage: 'Free',
                  id: 'pricing_card_2_count-for-1-video',
                })}
              </Typography>

              {/*  <div className={styles.pricingBackText2}>
                <Typography itemProp="price" variant="h2">
                  {formatMessage({
                    defaultMessage: '$65.00',
                    id: 'pricing_card_2_price-for-1-video',
                  })}
                </Typography>
              </div>

             <div className={styles.hrContainer}>
                <hr />
                <div className={styles.textHrWrapper}>
                  <Typography variant="body1">or</Typography>
                </div>
                <hr />
              </div>

              <Typography variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: '4 videos',
                    id: 'pricing_card_2_count-for-4-videos',
                  })}
                </b>
              </Typography>
              <div className={styles.pricingBackText2}>
                <Typography itemprop="price" variant="h2">
                  {formatMessage({
                    defaultMessage: '$234.00',
                    id: 'pricing_card_2_price-for-4-videos',
                  })}
                </Typography>
              </div>

              <div className={styles.pricingBackBottomText2}>
                <Typography itemprop="price" variant="h4">
                  {formatMessage({
                    defaultMessage: '$260.00',
                    id: 'pricing_card_2_strikethrough_price',
                  })}
                </Typography>
              </div> */}
            </div>

            <ul className={styles.ulWrapper2}>
              {secondCardUl.map((item) => (
                <li>
                  <Typography variant="body1" className={styles.cardText2}>
                    {formatMessage(pricingSecondCardLiData[item.text])}&nbsp;
                    <span className={styles.tooltipWrapper2}>
                      {item.buttonTooltip && !isMobile ? (
                        <TooltipComponent label={item.tooltipText} svg={item.buttonSvg} />
                      ) : null}
                      {item.buttonTooltip && isMobile ? (
                        <TooltipComponentMobile label={item.tooltipText} svg={item.buttonSvg} />
                      ) : null}
                    </span>
                  </Typography>
                </li>
              ))}
            </ul>
            <div className={styles.buttonWrapper2}>
              <Button variant="contained" size="large" onClick={() => handleClick('Gold')}>
                {formatMessage({
                  defaultMessage: 'Try now',
                  id: 'pricing_card_2_button_text',
                })}
              </Button>
            </div>
          </div>

          <div className={styles.card3}>
            <div className={styles.cardTitleWrapper3}>
              <Typography variant="h4" className={styles.cardTitle3}>
                {formatMessage({
                  defaultMessage: 'AFTER TRIAL',
                  id: 'pricing_card_3_title',
                })}
              </Typography>
            </div>
            <div className={styles.pricingBack3}>
              {/* <Typography variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: '1 video',
                    id: 'pricing_card_3_count_for_1_video',
                  })}
                </b>
              </Typography> */}

              <div className={styles.pricingBackText3}>
                <Typography itemprop="price" variant="h2">
                  {formatMessage({
                    defaultMessage: '$13/hr ',
                    id: 'pricing_card_3_price_for_1_video',
                  })}
                </Typography>
              </div>

              <div className={styles.pricingBackBottomText3}>
                <Typography itemprop="price" variant="h4">
                  {formatMessage({
                    defaultMessage: '$500.00',
                    id: 'pricing_card_3_strikethrough_price',
                  })}
                </Typography>
              </div>

              {/* <div className={styles.hrContainer3}>
                <hr />
                <div className={styles.textHrWrapper3}>
                  <Typography variant="body1">or</Typography>
                </div>
                <hr />
              </div>

              <Typography variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: '4 videos',
                    id: 'pricing_card_3_count_for_4_videos',
                  })}
                </b>
              </Typography>
              <div className={styles.pricingBackText3}>
                <Typography itemprop="price" variant="h2">
                  {formatMessage({
                    defaultMessage: '$450.00',
                    id: 'pricing_card_3_price_for_4_videos',
                  })}
                </Typography>
              </div>
              <div className={styles.pricingBackBottomText3}>
                <Typography itemprop="price" variant="h4">
                  {formatMessage({
                    defaultMessage: '$500.00',
                    id: 'pricing_card_3_strikethrough_price',
                  })}
                </Typography>
              </div> */}
            </div>
            <ul className={styles.ulWrapper3}>
              {thirdCardUl.map((item) => (
                <li>
                  <Typography variant="body1" className={styles.cardText3}>
                    {formatMessage(pricingThirdCardLiData[item.text])}
                    <span className={styles.tooltipWrapper3}>
                      {item.buttonTooltip && !isMobile ? (
                        <TooltipComponent blackSvg={item.buttonTooltip} label={item.tooltipText} svg={item.buttonSvg} />
                      ) : null}
                      {item.buttonTooltip && isMobile ? (
                        <TooltipComponentMobile
                          blackSvg={item.buttonTooltip}
                          label={item.tooltipText}
                          svg={item.buttonSvg}
                        />
                      ) : null}
                    </span>
                  </Typography>
                </li>
              ))}
            </ul>
            <div className={styles.buttonWrapper3}>
              <Button variant="contained" size="large" onClick={() => handleClick('Diamond')}>
                {formatMessage({
                  defaultMessage: 'Try now',
                  id: 'pricing_card_button_text',
                })}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;

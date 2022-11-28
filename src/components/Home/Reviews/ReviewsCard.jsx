import cn from 'classnames';
import Image from 'next/image';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import React, { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { messagesReviews } from './ReviewsDataContainer';
import s from './Reviews.module.scss';

export const ReviewsCard = ({ item, active, setReviewsState, reviewsState }) => {
  const [isShowButton, setIsShowButton] = useState(false);

  const { formatMessage } = useIntl();

  const unsplittedRef = useRef(null);

  useEffect(() => {
    const heightForHide = 156;

    const heightListener = () => {
      const unsplittedRefHeight = unsplittedRef.current.getBoundingClientRect().height;

      if (unsplittedRefHeight > heightForHide) {
        setIsShowButton(true);
      } else {
        setIsShowButton(false);
      }
    };
    window.addEventListener('resize', heightListener);

    heightListener();

    return () => {
      window.removeEventListener('resize', heightListener);
    };
  }, [active]);

  return (
    <div
      className={cn(s.card, {
        [s.cardVisible]: active,
      })}
      style={{ opacity: '4' }}
      key={item.id}
    >
      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Vimerse LLC" />
        <meta itemProp="email" content="info@vimerse.com" />
      </div>

      <div className={s.cardInfo}>
        <div className={s.cardImage}>
          <Image
            src={item.image}
            alt={item.cardTitle}
            className={s.cardImgInto}
            placeholder="blur"
            blurDataURL="/images/reviews/imageIncase.svg"
            layout="fill"
          />
        </div>
        <div className={s.cardInfoAbout}>
          <Typography itemProp="author" variant="h5">
            {formatMessage(messagesReviews[item.cardTitle])}
          </Typography>
          <div className={s.subtitleWrapper}>
            <Typography itemProp="reviewBody" variant="body1">
              {formatMessage(messagesReviews[item.cardSubtitle])}
            </Typography>
          </div>
        </div>
      </div>

      <div className={s.hrContainer}>
        <hr />
      </div>
      <div className={cn(s.cardText, { [s.showMoreContainer]: item.isEnableShowMore })}>
        <Typography id={item.cardText} itemProp="reviewBody" variant="body1">
          {formatMessage(messagesReviews[item.cardText])}
        </Typography>
      </div>
      <div className={cn(s.cardText, s.cardTextUnvisible)}>
        <Typography
          style={{ opacity: '-2' }}
          ref={unsplittedRef}
          id={item.cardText}
          itemProp="reviewBody"
          variant="body1"
        >
          {formatMessage(messagesReviews[item.cardText])}
        </Typography>
      </div>
      {isShowButton ? (
        <span className={s.showMoreInfoLabel}>
          <button
            onClick={() =>
              setReviewsState(
                reviewsState.map((currentElem) =>
                  currentElem.id === item.id
                    ? { ...currentElem, isEnableShowMore: !currentElem.isEnableShowMore }
                    : currentElem
                )
              )
            }
            className={s.showMoreInfoButton}
            type="button"
          >
            <span className={s.showMoreTextButton}>{item.isEnableShowMore ? 'Show more' : 'Show less'}</span>
            {item.isEnableShowMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </button>
        </span>
      ) : null}
    </div>
  );
};

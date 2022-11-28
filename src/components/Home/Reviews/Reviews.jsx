import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';

import s from './Reviews.module.scss';
import { reviewsData } from './ReviewsDataContainer';
import Button from '../../Form/Button';
import { ReviewsCard } from './ReviewsCard';

const Reviews = () => {
  const [active, setActive] = useState(false);

  const [reviewsState, setReviewsState] = useState(reviewsData);

  return (
    <div className={s.wrapper} itemProp="review" itemScope itemType="https://schema.org/Review">
      <Container className={s.container}>
        <Typography itemProp="name" variant="h2" component="h3">
          Customer reviews
        </Typography>
        <div className={s.cardWrapper}>
          {reviewsState.map((item) => (
            <ReviewsCard item={item} active={active} reviewsState={reviewsState} setReviewsState={setReviewsState} />
          ))}
        </div>

        <div className={s.buttonContainer}>
          {!active && (
            <Button size="medium" variant="outlined" onClick={() => setActive(true)}>
              Show more
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;

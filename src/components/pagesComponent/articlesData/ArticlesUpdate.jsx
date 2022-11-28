import React from 'react';
import Image from 'next/image';
import { Link as MaterialLink, Typography } from '@material-ui/core';
import classNames from 'classnames';
import s from './how-to-choose.module.scss';

const ArticlesUpdate = ({ dateUpdate, author }) => (
  <div className={s.updateWrapper}>
    <MaterialLink className={classNames(s.updateContainer)} href="/about-us" target={'_blank'}>
      <span style={{ marginRight: '7px' }}>
        <Image
          src="/images/articles/authors/author.jpg"
          alt="Hyunjae_Lee"
          placeholder="blur"
          blurDataURL="/images/reviews/imageIncase.svg"
          width="40px"
          height="40px"
        />
      </span>

      <Typography className={s.links} variant="body1">
        {author}
      </Typography>
    </MaterialLink>
    <div>
      <Typography className={s.dateUpdate} variant="body2">
        {dateUpdate}
      </Typography>
    </div>
  </div>
);

export default ArticlesUpdate;

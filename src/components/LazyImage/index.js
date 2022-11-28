import React, { useState, useEffect, memo } from 'react';
import LazyLoad from 'react-lazyload';

const ImagePlaceholder = memo(({ placeholderStyle, loaded, errors }) => (
  <>
    {(!loaded || errors) && (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#f1f2f6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          boxSizing: 'border-box',
          padding: '20px',
          backgroundImage: 'url(/images/image-placeholder.svg)',
          ...placeholderStyle,
        }}
      />
    )}
  </>
));

export const LazyImage = memo(
  ({
    src,
    alt,
    placeholder,
    className,
    needImages,
    placeholderStyle,
    customPlaceholder,
    wrapperStyle,
    wrapperClass,
    ...rest
  }) => {
    const [imageSrc, setImageSrc] = useState();
    const [imageRef, setImageRef] = useState();
    const [errors, setErrors] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const onLoad = (event) => {
      event.target.classList.add('loaded');
      setLoaded(true);
      setErrors(false);
    };

    const onError = (event) => {
      event.target.classList.add('has-error');
      setErrors(true);
    };

    useEffect(() => {
      let observer;
      let didCancel = false;

      if (imageRef && imageSrc !== src) {
        if (needImages) {
          setImageSrc(src);
          return;
        }

        if (loaded && !src) {
          setErrors(true);
        }

        if (IntersectionObserver) {
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
                }
              });
            },
            {
              threshold: 0.01,
              rootMargin: '75%',
            }
          );
          observer.observe(imageRef);
        } else {
          // Old browsers fallback
          setImageSrc(src);
        }
      }
      // eslint-disable-next-line consistent-return
      return () => {
        didCancel = true;
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      };
    }, [src, imageSrc, imageRef]);

    return (
      <div style={{ ...wrapperStyle }} className={wrapperClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={setImageRef}
          data-src={src}
          src={imageSrc}
          alt={alt}
          onLoad={onLoad}
          onError={onError}
          className={className}
          style={loaded ? { opacity: 1 } : { opacity: 0 }}
          {...rest}
        />
        {(!loaded || errors) && placeholder && (
          <LazyLoad once>
            <ImagePlaceholder
              placeholderStyle={placeholderStyle}
              loaded={loaded}
              errors={errors}
              CustomPlaceholder={customPlaceholder}
            />
          </LazyLoad>
        )}
      </div>
    );
  }
);

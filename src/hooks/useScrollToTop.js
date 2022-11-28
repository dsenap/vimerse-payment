import React, { useEffect } from 'react';

export default function useScrollToTop() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
}

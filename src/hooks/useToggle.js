import React from 'react';

export default function useToggle(initialValue = false) {
  const [playVideoYoutube, setPlayVideoYoutube] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setPlayVideoYoutube((v) => !v);
  }, []);
  return { playVideoYoutube, toggle };
}

import { useState } from 'react';

export const useBoolean = (initialValue = false) => {
  const [bool, setBool] = useState(initialValue);

  const setFalse = () => setBool(false);
  const setTrue = () => setBool(true);
  const toggleValue = () => setBool((state) => !state);

  return [bool, setTrue, setFalse, toggleValue];
};

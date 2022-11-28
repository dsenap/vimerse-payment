const handleBlurNew = ({ value, setValue, touched, serInputErrors, setTouched, validateFunsction }) => {
  setValue(value?.trim() || '');
  validateFunsction(value?.trim() || '', touched, serInputErrors);
  if (touched) return;
  setTouched(true);
};

export default handleBlurNew;

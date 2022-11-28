import { emailValidation } from './validation';

export const validateField = (value, touched, setInputErrors) => {
  if (!value) return;
  setInputErrors('Email is requires');
  if (value.length < 6 && touched && value.length > 0) {
    setInputErrors('Your email is too short');
  } else if (value.length === 0 && touched) {
    setInputErrors('Email field is required');
  } else if (value.length > 255 && touched) {
    setInputErrors('Your email is too long');
  } else if (!emailValidation(value)) {
    setInputErrors('Please, enter valid email address');
  } else {
    setInputErrors(false);
  }
};

export const validateFieldName = (valueName, touchedName, setInputNameErrors) => {
  if (!valueName) {
    setInputNameErrors('Name is requires');
  }
  if (valueName.length < 3 && touchedName && valueName.length > 0) {
    setInputNameErrors('Name must be more than 2 characters');
  } else if (valueName.length === 0 && touchedName) {
    setInputNameErrors('Name field is required');
  } else if (valueName.length > 80 && touchedName) {
    setInputNameErrors('Your name is too long');
  } else {
    setInputNameErrors(false);
  }
};

export const handleBlur = ({ value, setValue, touched, setInputErrors, setTouched }) => {
  setValue(value?.trim() || '');
  validateField(value?.trim() || '', touched, setInputErrors);
  if (touched) return;
  setTouched(true);
};

export const handleBlurName = ({ value, setValue, touched, setInputErrors, setTouched }) => {
  setValue(value?.trim().replace(/\.{2,}/g, '.') || '');
  validateFieldName(value?.trim() || '', touched, setInputErrors);
  if (touched) return;
  setTouched(true);
};

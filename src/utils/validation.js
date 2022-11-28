import { EMAIL_REGEXP } from './regulars';

export const emailValidation = (email) => {
  const re = EMAIL_REGEXP;
  const convertedEmail = String(email).toLowerCase();
  return re.test(convertedEmail);
};

export const nameValidation = (name) => {
  const reName = /^[A-z-.][A-z-.\s]{1,80}$/;
  const convertedName = String(name);
  return reName.test(convertedName);
};

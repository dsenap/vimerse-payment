import React, { useCallback, useEffect, useState } from 'react';
import { Container, Typography, Link as MaterialLink } from '@material-ui/core';
import cn from 'classnames';
import { useIntl } from 'react-intl';
import Recaptcha from 'react-google-invisible-recaptcha';
import LazyLoad from 'react-lazyload';
import styles from './StartCreating.module.scss';
import Button from '../../Form/Button';
import Field from '../../Form/Field';
import { openInNewTab } from '../../../utils/openWindowInNewTab';
import { validateField, validateFieldName } from '../../../utils/onBlurValidation';
import { fieldSvg, startIconSvg, thankImageSvg } from './startCreatingData';
import MainApi from '../../../api/MainApi';
import BorderForForm from '../../ArticleBorder/BorderForForm';
import { useSnackBarState } from '../../../contexts/SnackBarContext';

const StartCreating = ({ activeIndex, setActiveIndex }) => {
  const [fieldValue, setFieldValue] = useState('');
  const [inputErrors, setInputErrors] = useState('Email field is required');
  const [touched, setTouched] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [inputNameErrors, setInputNameErrors] = useState('Name field is required');
  const [touchedName, setTouchedName] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDisableButton, setIsDisableButton] = useState(true);
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);

  const { openSnackBar, setMessageSnackBar } = useSnackBarState();
  const { formatMessage } = useIntl();

  let recaptcha = null;

  useEffect(() => {
    if (fieldValue?.length > 0) {
      setTouched(true);
      validateField(fieldValue, touched, setInputErrors);
    }
  }, []);

  useEffect(() => {
    if (nameValue?.length > 0) {
      setTouchedName(true);
      setInputNameErrors('Empty');
      validateFieldName(nameValue, touchedName, setInputNameErrors);
    }
  }, []);

  useEffect(() => {
    if (inputNameErrors === false && touchedName && nameValue.length === 0) {
      setInputNameErrors('Name field is required');
    }
  }, [touchedName]);

  useEffect(() => {
    if (isValidCaptcha) {
      submitData().catch((err) => console.log(err));
    }
  }, [isValidCaptcha]);

  const handleBlur = () => {
    const val = fieldValue?.trim() || '';
    setFieldValue(val);
    validateField(val, touched, setInputErrors);
    if (!touched) setTouched(true);
  };

  const handleBlurName = () => {
    const valName = nameValue?.trim() || '';
    setNameValue(valName);
    validateFieldName(valName, touchedName, setInputNameErrors);
    if (!touchedName) setTouchedName(true);
  };

  const MAX_EMAIL_LENGTH = 255;
  const MAX_NAME_LENGTH = 80;
  const handleSignUpChange = useCallback(
    (e) => {
      const { value } = e.target;
      if (value.length > MAX_EMAIL_LENGTH) {
        setInputErrors('Your email is too long');
        return;
      }
      validateField(value, touched, setInputErrors);

      setFieldValue(e.target.value);
    },
    [setInputErrors, setFieldValue, touched]
  );

  const handleNameChange = useCallback(
    (e) => {
      const { value } = e.target;
      if (value.length > MAX_NAME_LENGTH) {
        setInputNameErrors('Your name is too long');
        return;
      }
      validateFieldName(value, touchedName, setInputNameErrors);

      setNameValue(e.target.value);
    },
    [setInputNameErrors, setNameValue, touchedName]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nameValue.length === 0 && fieldValue.length === 0) {
      setTouchedName(true);
      setInputNameErrors('Name field is required');
      setTouched(true);
      setInputErrors('Email field is required');

      return;
    }

    if (nameValue.length === 0) {
      setTouchedName(true);
      setInputNameErrors('Name field is required');

      return;
    }

    if (fieldValue.length === 0) {
      setTouched(true);
      setInputErrors('Email field is required');

      return;
    }

    if (inputErrors || inputNameErrors) {
      recaptcha.reset();

      return;
    }

    await recaptcha.execute();
  };

  const submitData = async () => {
    setIsDisableButton(true);

    if (activeIndex === -1) {
      try {
        await MainApi.getInstance().sendMailAndLogged('Consultation', nameValue, fieldValue);
        console.log('ok');
      } catch (err) {
        console.log(err);
      }

      openInNewTab(`https://form.jotform.com/211873718600152?name=${nameValue}&whatIs26=${fieldValue}`);
    }

    if (activeIndex === 0) {
      try {
        await MainApi.getInstance().sendMailAndLogged('Gold', nameValue, fieldValue);
      } catch (err) {
        console.log(err);
      }

      openInNewTab(`https://www.jotform.com/form/212133409884153?name=${nameValue}&whatIs=${fieldValue}`);
    }
    if (activeIndex === 1) {
      try {
        await MainApi.getInstance().sendMailAndLogged('Diamond', nameValue, fieldValue);
      } catch (err) {
        console.log(err);
      }

      openInNewTab(`https://form.jotform.com/212141002043128?name=${nameValue}&whatIs=${fieldValue}`);
    }

    setIsValidCaptcha(false);
    setSubmitted(true);
  };

  const handleResolveCaptcha = () => {
    setIsValidCaptcha(true);
  };

  function compateActiveIndex(activeIndex, value) {
    return activeIndex === value;
  }

  return (
    <div className={styles.wrapper} id="start-creating">
      <Container>
        <div className={styles.container}>
          <div className={styles.infoBlockWrapper}>
            <div className={styles.infoTitleWrapper}>
              <Typography variant="h2" component="p">
                {formatMessage({
                  defaultMessage: 'Start creating',
                  id: 'start_creating_title',
                })}
              </Typography>
            </div>

            <div className={styles.subtitleWrapper}>
              <Typography variant="h5">
                {formatMessage({
                  defaultMessage: 'Let’s turn your footage into an engaging video',
                  id: 'start_creating_subtitle',
                })}
              </Typography>
            </div>
            <div className={styles.textWrapper}>
              <Typography variant="body1">
                {' '}
                <b>Once your raw footage is ready, please submit your contact.</b> Next, you will be redirected to an
                ordering form. It is a simple, straightforward process with a two-calendar day turnaround. One free
                trial for first-time users.
              </Typography>
            </div>
          </div>
          {submitted ? (
            <div className={styles.submitWrapper}>
              <div className={styles.submitImage}>{thankImageSvg}</div>
              <div className={styles.submitTitle}>
                <Typography variant="h2">Thank you!</Typography>
              </div>
              <div className={styles.submitText}>
                <Typography variant="h5">
                  {formatMessage({
                    defaultMessage: `We have received your contact. Please fill out the ordering form that opened in a new tab or follow this`,
                    id: 'start_creating_submit_title',
                  })}
                  <span>
                    {' '}
                    <MaterialLink
                      href={`${
                        // eslint-disable-next-line no-nested-ternary
                        activeIndex === -1
                          ? `https://form.jotform.com/211873718600152?name=${nameValue}&whatIs26=${fieldValue}`
                          : activeIndex === 0
                          ? `https://www.jotform.com/form/212133409884153?name=${nameValue}&whatIs=${fieldValue}`
                          : `https://form.jotform.com/212141002043128?name=${nameValue}&whatIs=${fieldValue}`
                      }`}
                      target="_blank"
                      rel="nofollow"
                      className={styles.links}
                    >
                      link
                    </MaterialLink>
                  </span>
                </Typography>
              </div>
            </div>
          ) : (
            <div className={styles.formWrapper}>
              <div className={styles.titleFormWrapper}>
                <Typography variant="caption">
                  {formatMessage({
                    defaultMessage:
                      ' After clicking on the button "Start now", you will be redirected to an ordering form',
                    id: 'start_creating_form_title',
                  })}
                </Typography>
              </div>

              <div className={styles.borderWrapperForm}>
                <BorderForForm />
              </div>
              <div className={styles.buttonGroup}>
                <div className={cn(styles.buttonGroupWidth, { [styles.buttonActive]: activeIndex === -1 })}>
                  <Button
                    startIcon={activeIndex === -1 ? startIconSvg : null}
                    color="secondary"
                    variant="outlined"
                    size="medium"
                    disableRipper={compateActiveIndex(activeIndex, -1)}
                    onClick={() => setActiveIndex(-1)}
                    style={{ display: 'block', padding: '0' }}
                  >
                    <div>
                      <p className={styles.buttonTopPart}>
                        {' '}
                        {formatMessage({
                          defaultMessage: 'Consultation',
                          id: 'start_creating_button_type_1',
                        })}
                      </p>
                      <p style={{ marginLeft: '-0.5px' }} className={styles.buttonBottomPart}>
                        Free
                      </p>
                    </div>
                  </Button>
                </div>
                <div className={cn(styles.buttonGroupWidth, { [styles.buttonActive]: activeIndex === 0 })}>
                  <Button
                    startIcon={activeIndex === 0 ? startIconSvg : null}
                    color="secondary"
                    variant="outlined"
                    size="medium"
                    disableRipper={compateActiveIndex(activeIndex, 0)}
                    onClick={() => setActiveIndex(0)}
                    style={{ display: 'block', padding: '0' }}
                  >
                    <p className={styles.buttonTopPart}>
                      {' '}
                      {formatMessage({
                        defaultMessage: 'Gold',
                        id: 'start_creating_button_type_2',
                      })}
                    </p>
                    <p className={styles.buttonBottomPart}>1 free trial</p>
                  </Button>
                </div>
                <div className={cn(styles.buttonGroupWidth, { [styles.buttonActive]: activeIndex === 1 })}>
                  <Button
                    startIcon={activeIndex === 1 ? startIconSvg : null}
                    color="secondary"
                    variant="outlined"
                    disableRipper={compateActiveIndex(activeIndex, 1)}
                    size="medium"
                    onClick={() => setActiveIndex(1)}
                    style={{ display: 'block', padding: '0' }}
                  >
                    <p className={styles.buttonTopPart}>
                      {formatMessage({
                        defaultMessage: 'Diamond',
                        id: 'start_creating_button_type_3',
                      })}
                    </p>
                    <p style={{ marginLeft: '-0.5px' }} className={styles.buttonBottomPart}>
                      1 free trial
                    </p>
                  </Button>
                </div>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.nameWrapper}>
                  <Field
                    value={nameValue}
                    name="name"
                    type="text"
                    label="Name"
                    id="name-field"
                    placeholder="Enter your name"
                    error={touchedName && inputNameErrors}
                    customBlur={handleBlurName}
                    handleChange={handleNameChange}
                    helperText={inputNameErrors}
                    maxLength={MAX_NAME_LENGTH}
                    isSvgInEnd={!inputNameErrors && nameValue?.length > 2}
                    imageInField={fieldSvg}
                    noError="Please provide us with your name"
                  />
                </div>

                <div className={styles.emailWrapper}>
                  <Field
                    value={fieldValue}
                    type="text"
                    name="email"
                    id="email-field"
                    label="Email"
                    placeholder="Enter your email"
                    error={touched && inputErrors}
                    customBlur={handleBlur}
                    handleChange={handleSignUpChange}
                    helperText={inputErrors}
                    maxLength={MAX_EMAIL_LENGTH}
                    isSvgInEnd={!inputErrors && fieldValue?.length > 0}
                    imageInField={fieldSvg}
                    noError="Please enter a valid email address"
                  />
                </div>

                <div className={styles.buttonWrapper}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    itemScope
                    disabled={isDisableButton}
                    itemType="https://schema.org/Product"
                    className="GA-send-event"
                  >
                    Start now
                    <meta itemProp="category" content="First-class video editing service" />
                    <meta itemProp="name" content="vimerse video editor" />
                    <meta itemProp="description" content="Professional video editing service" />
                    <span
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                      content="Professional video editing service"
                    >
                      <span itemProp="priceCurrency" content="USD" />
                      <meta itemProp="price" content={0.0} />
                    </span>
                  </Button>
                </div>

                <LazyLoad height={400} once>
                  <Recaptcha
                    sitekey={process.env.NEXT_PUBLIC_SITEKEY}
                    /* eslint-disable-next-line */
                    ref={(ref) => (recaptcha = ref)}
                    onError={() => {
                      openSnackBar();
                      setMessageSnackBar('Captcha not valid, please try one more time');
                    }}
                    onLoaded={() => setIsDisableButton(false)}
                    onResolved={handleResolveCaptcha}
                  />
                </LazyLoad>

                <div className={styles.borderWrapperFormBottom}>
                  <BorderForForm />
                </div>

                <div className={styles.bottomText}>
                  <Typography variant="caption">
                    By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and
                    Cookie&nbsp;Statement
                  </Typography>
                </div>
              </form>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StartCreating;

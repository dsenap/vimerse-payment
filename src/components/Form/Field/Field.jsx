import React, { memo, useEffect, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, FormHelperText, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import useInputsLength from 'src/hooks/useInputLength';
import s from './Field.module.scss';
import { initialProps } from '../../../utils/formHelper';

const Field = ({
  label,
  helperText = 'Error',
  placeholder,
  disabled,
  error,
  name,
  id,
  value,
  handleChange,
  customBlur,
  type,
  options,
  shrink,
  maxLength,
  isSvgInEnd,
  imageInField,
  noError,
  ...props
}) => {
  // булевые переменные должны содержать префиксы has, is, can
  const [focus, setFocus] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [errorMark, setErrorMark] = useState(error);

  useEffect(() => {
    if (value?.length === 0) {
      setEmpty(true);
    }
  }, [value]);

  useEffect(() => {
    setErrorMark(error);
  }, [error]);

  const { inputsLength, changeCharactersCount } = useInputsLength();

  if (!id) throw new Error();

  const preventClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <InputLabel focused={focus} htmlFor={name} error={error} disabled={disabled} shrink={shrink}>
        {label}
      </InputLabel>
      <FormControl
        error={errorMark}
        className={classNames({
          focused: focus,
          notEmpty: !empty || value?.length > 0,
          error: errorMark,
          disabled,
        })}
      >
        <OutlinedInput
          placeholder={placeholder}
          value={value}
          id={id}
          name={name}
          inputProps={{ maxLength: maxLength }}
          disabled={disabled}
          autoComplete
          style={{ position: 'relative' }}
          type={type}
          endAdornment={
            isSvgInEnd ? (
              <InputAdornment
                style={{ position: 'absolute', right: '14px', padding: '0' }}
                onMouseDown={preventClick}
                position="end"
                disablePointerEvents
              >
                {imageInField}
              </InputAdornment>
            ) : null
          }
          onChange={(e) => {
            changeCharactersCount(e);
            handleChange(e);
          }}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={(event) => {
            setFocus(false);

            if (customBlur) {
              customBlur(event);
            }
          }}
          {...props}
        />
        <FormHelperText error={error} disabled={disabled}>
          {error ? helperText : noError}
        </FormHelperText>
        <div className={s.counter}>
          {/* // useMemo */}
          {inputsLength[name]} / {initialProps[name].maxLength}
        </div>
      </FormControl>
    </>
  );
};

Field.defaultProps = {
  label: 'Label',
  helperText: 'Helper text',
  placeholder: 'Placeholders',
  disabled: false,
};

export default memo(Field);

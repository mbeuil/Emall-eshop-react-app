/** @format */

import React, { memo } from 'react';

import * as S from './form-input.styles';

interface FormInputProps {
  handleChange: function;
  label: string;
  otherProps: object;
}

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <S.GroupContainer>
      <S.FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <S.FormInputLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </S.FormInputLabel>
      ) : null}
    </S.GroupContainer>
  );
};

export default memo(FormInput);

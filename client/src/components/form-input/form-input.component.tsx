/** @format */

// node_modules
import React, { memo } from 'react';

// Styles + Types + Interfaces
import * as S from './form-input.styles';

interface formInputProps {
  handleChange: any;
  label: string;
  [x: string]: any;
}

const FormInput: React.FC<formInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
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

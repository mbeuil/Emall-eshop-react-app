/** @format */

import styled, { css } from 'styled-components';

const isShrink = css`
  top: -9px;
  font-size: 12px;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  @media screen and (max-width: 800px) {
    margin: 25px 0;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 3px;
  border: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
    border-color: #ee605f;
  }

  &:focus ~ label {
    ${isShrink}
    color: #ee605f;
  }
`;

export const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  background-color: white;
  padding: 0 5px;

  &.shrink {
    ${isShrink}
    color: black;
  }
`;

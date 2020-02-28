/** @format */

import styled, { css } from 'styled-components';

interface customButtonProps {
  isGoogleSignIn?: boolean;
  isInverted?: boolean;
}

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const GoogleSignInStyles = css`
  background-color: #ee605f;
  color: white;
  border: none;

  &:hover {
    background-color: #f3a5a4;
    color: #ec4948;
    border: none;
  }
`;

const getButtonStyles = (props: customButtonProps) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }
  return props.isInverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 0.8em;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

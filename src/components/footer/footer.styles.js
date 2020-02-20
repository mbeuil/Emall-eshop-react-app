/** @format */

import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

export const Signature = styled.pre`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans Condensed';
`;

export const GithubLink = styled.a`
  text-decoration: underline;

  &:hover {
    color: #ee605f;
  }
`;

/** @format */

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const OptionContainerTyles = css`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #ee605f;
  }
`;

export const HeaderContainer = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 80px;
    margin-bottom: 20 px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 170px;
  padding: 10px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100px;
  }
`;

export const LogoStyle = styled(Logo)`
  height: 90px;
  width: 150px;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 80px;
  }
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerTyles}
`;

export const OptionDiv = styled.div`
  outline: none;
  ${OptionContainerTyles};
`;

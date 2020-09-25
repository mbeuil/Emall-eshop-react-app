/** @format */
import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  margin-bottom: 30px;
`;

export const CollectionTitle = styled.h1`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  &:before {
    border-top: 1px solid grey;
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: -1;
  }
`;

export const TitleContainer = styled.span`
  font-size: 28px;
  background-color: white;
  padding-right: 10px;
  outline: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

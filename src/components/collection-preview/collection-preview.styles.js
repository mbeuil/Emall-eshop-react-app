/** @format */
import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  color: grey;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

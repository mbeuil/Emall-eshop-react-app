/** @format */
import styled from 'styled-components';

interface MenuItemContainerProps {
  size?: string;
  [x: string]: any;
}

const isLarge = ({ size }: MenuItemContainerProps) => {
  return size ? '380px' : '240px';
};

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${isLarge};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

  ${MenuItemContainer}:hover & {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  ${MenuItemContainer}:hover & {
    opacity: 0.9;
  }
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

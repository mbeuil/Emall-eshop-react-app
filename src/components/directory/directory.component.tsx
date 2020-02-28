/** @format */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { selecDirectorySections } from '../../redux/directory/directory.selectors';

import * as S from './directory.styles';

interface sectionProps {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

const Directory: React.FC = () => {
  const sections: sectionProps[] = useSelector(selecDirectorySections);

  return (
    <S.DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </S.DirectoryMenuContainer>
  );
};

export default memo(Directory);

/** @format */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { selecDirectorySections } from '../../redux/directory/directory.selectors';

import * as S from './directory.styles';

const Directory = () => {
  const sections = useSelector(selecDirectorySections);

  return (
    <S.DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </S.DirectoryMenuContainer>
  );
};

export default memo(Directory);

/** @format */

// node_modules
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

// Local modules
import MenuItem from '../menu-item/menu-item.component';
import { selecDirectorySections } from '../../redux/directory/directory.selectors';

// Styles + Types + Interfaces
import * as S from './directory.styles';
import * as T from '../../Types';

const Directory: React.FC = () => {
  const sections: T.SectionProps[] = useSelector(selecDirectorySections);

  return (
    <S.DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </S.DirectoryMenuContainer>
  );
};

export default memo(Directory);

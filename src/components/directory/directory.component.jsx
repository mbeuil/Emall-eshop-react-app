/** @format */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { selecDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.style.css';

const Directory = () => {
  const sections = useSelector(selecDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default memo(Directory);

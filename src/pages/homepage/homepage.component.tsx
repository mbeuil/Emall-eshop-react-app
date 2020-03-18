/** @format */

// node_modules
import React from 'react';

// Local modules
import Directory from '../../components/directory/directory.component';

// Styles + Types + Interfaces
import * as S from './homepage.styles';

const HomePage: React.FC = () => {
  return (
    <S.HomePageContainer>
      <Directory />
    </S.HomePageContainer>
  );
};

export default HomePage;
